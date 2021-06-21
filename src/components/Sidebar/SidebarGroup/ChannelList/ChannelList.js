import React, { useState } from 'react';
import './ChannelList.css'
import Channel from './Channel/Channel.js'
import db from '../../../../firebase';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectGroupId } from '../../../../slices/groupSlice';
import { setChannelInfo } from '../../../../slices/channelSlice';
import AddIcon from '@material-ui/icons/Add';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';

const ChannelList = () => {
    const dispatch = useDispatch();
    const [channels, setChannels] = useState([]);
    const groupId = useSelector(selectGroupId);

    useEffect(() => {
        if (groupId) {
            db.collection('groups')
                .doc(groupId)
                .collection('channels')
                .onSnapshot((snapshot) =>
                    setChannels(snapshot.docs.map((doc) => ({
                        id: doc.id,
                        channel: doc.data(),
                    })))
                );
        }
    }, [groupId, channels.length])

    if (channels.length >0){
        dispatch(
            setChannelInfo({
                channelId: channels[0].id,
                channelName: channels[0].channel.channelName,
            })
        );
    }

    

    const handleAddChannel = () => {
        const cName = prompt("Enter channel name");

        if (cName) {
            db.collection('groups')
                .doc(groupId)
                .collection('channels')
                .add({
                    timestamp :firebase.firestore.FieldValue.serverTimestamp(),
                    channelName: cName,
                });
        }
    };

    return (
        <div className="channel_list">
            <div className="channel_header">
                <h4>Channels</h4>

                <AddIcon
                    onClick={handleAddChannel}
                    className="add_new_channel"
                />
            </div>
            <div>
                {channels.map(({ id, channel }) => (
                    <Channel
                        id={id}
                        channelName={channel.channelName}
                    />
                ))}
            </div>
        </div>
    )
}

export default ChannelList;
