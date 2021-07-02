import React, { useState } from 'react';
import './ChannelList.css';
import Channel from './Channel/Channel.js';
import db from '../../../../utils/firebase/firebase';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectGroupId } from '../../../../slices/groupSlice';
import { setChannelInfo } from '../../../../slices/channelSlice';
import { useDispatch } from 'react-redux';
import ChannelSettingPage from '../../../ChannelSettingPage/ChannelSettingPage';

const ChannelList = () => {
    const dispatch = useDispatch();
    const groupId = useSelector(selectGroupId);
    const [channels, setChannels] = useState([]);
    const [displayChannelSetting, setDisplayChannelSetting] = useState(false);

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
                );
        }
    }, [groupId, channels.length])

    if (channels.length > 0) {
        dispatch(
            setChannelInfo({
                channelId: channels[0].id,
                channelName: channels[0].channel.channelName,
            })
        );
    }

    return (
        <div className="channel_list_sidebar">
            <div className="channel_list">
                {channels.map(({ id, channel }) => (
                    <Channel
                        id={id}
                        channelName={channel.channelName}
                        openChannelSetting={()=>setDisplayChannelSetting(true)}
                    />
                ))}
            </div>
            
            {
                displayChannelSetting && (
                    <ChannelSettingPage handleClose={()=>setDisplayChannelSetting(false)} />
                )
            }
        </div>
    )
}

export default ChannelList;
