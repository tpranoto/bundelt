import React from 'react';
import { useOutsideAlerter } from '../../../utils/helper/helper.js';
import './ChannelDeleteDialog.css';
import db from '../../../utils/firebase/firebase';


const ChannelDeleteDialog = ({ handleCloseDialog, groupId, channelId }) => {
    const dialogRef = useOutsideAlerter(() => {
        handleCloseDialog();
    });

    const handleDeleteDialog = () => {
        db.collection('groups')
            .doc(groupId)
            .collection('channels')
            .doc(channelId)
            .delete()

        handleCloseDialog();
    }

    return (
        <div
            className="bg_dialog display_block"
        >
            <div
                className="channel_delete_dialog_main"
                ref={dialogRef}
            >
                <h3>Delete Channel</h3>
                <p>Are you sure you want to delete this channel? This cannot be undone</p>

                <button
                    className="cancel_channel_delete_button"
                    onClick={handleCloseDialog}
                >
                    cancel
                </button>
                <button
                    className="delete_channel_button"
                    onClick={handleDeleteDialog}
                >
                    delete
                </button>
            </div>
        </div>
    )
}

export default ChannelDeleteDialog;
