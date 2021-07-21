import React, { useState } from 'react';
import './ChannelList.css';
import Channel from './Channel/Channel.js';
import db from '../../../../utils/firebase/firebase';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectGroupId } from '../../../../slices/groupSlice';
import { selectChannelId, setChannelInfo } from '../../../../slices/channelSlice';
import { useDispatch } from 'react-redux';

const channelFound = (channelList, channelId) => {
    for (const value of channelList) {
        if (value.id === channelId) {
            return true;
        }
    }
    return false;
}

const ChannelList = () => {
    const dispatch = useDispatch();
    const groupId = useSelector(selectGroupId);
    const channelId = useSelector(selectChannelId);
    const [channels, setChannels] = useState([]);
    const [activeChannel, setActiveChannel] = useState("");

    useEffect(() => {
        if (groupId) {
            db.collection('groups')
                .doc(groupId)
                .collection('channels')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) =>
                    setChannels(snapshot.docs.map((doc) => ({
                        id: doc.id,
                        channel: doc.data(),
                    })))
                )
        }

        //reset active channel when not found
        if (!channelFound(channels, channelId)) {
            setActiveChannel("");
        }

        if (activeChannel === "" && channels.length > 0) {
            setActiveChannel(channels[0].id);
            dispatch(
                setChannelInfo({
                    channelId: channels[0].id,
                    channelName: channels[0].channel.channelName,
                })
            );
        }

    }, [groupId, channelId, activeChannel, channels, dispatch]);

    const handleChannelOnClick = (chId, chName) => {
        setActiveChannel(chId);
        dispatch(
            setChannelInfo({
                channelId: chId,
                channelName: chName,
            })
        );
    }

    return (
        <div className="channel_list_sidebar">
            <div className="channel_list">
                {channels.map(({ id, channel }) => (
                    <Channel
                        channelId={id}
                        channelName={channel.channelName}
                        activeChannel={id === activeChannel}
                        onClick={() => handleChannelOnClick(id, channel.channelName)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ChannelList;
