import React, { useState } from 'react';
import './ChannelList.css';
import Channel from './Channel/Channel.js';
import NewChannelDialog from './NewChannelDialog/NewChannelDialog.js';
import db from '../../../../utils/firebase/firebase';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectGroupId } from '../../../../slices/groupSlice';
import { setChannelInfo } from '../../../../slices/channelSlice';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import Tooltip from '../../../../utils/tooltip/Tooltip';

const ChannelList = () => {
    const dispatch = useDispatch();
    const groupId = useSelector(selectGroupId);
    const [channels, setChannels] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

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

    const handleCloseDialog = () => {
        setShowAddDialog(false);
    }

    const handleOpenDialog = () => {
        setShowAddDialog(true);
    }

    return (
        <div className="channel_list_sidebar">
            <div className="channel_header">
                <h4>Channels</h4>

                <Tooltip
                    content="Add Channel"
                >
                <AddIcon
                    onClick={handleOpenDialog}
                    className="add_new_channel"
                />
                </Tooltip>
            </div>

            <NewChannelDialog
                handleCloseDialog={handleCloseDialog}
                show={showAddDialog}
            />

            <div className="channel_list">
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
