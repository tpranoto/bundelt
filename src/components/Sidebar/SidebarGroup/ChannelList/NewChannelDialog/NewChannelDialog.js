import React from 'react';
import { useState } from 'react';
import './NewChannelDialog.css';
import db from '../../../../../utils/firebase/firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectGroupId } from '../../../../../slices/groupSlice';
import { useOutsideAlerter } from '../../../../../utils/helper_func/helper.js';


const NewChannelDialog = ({ handleCloseDialog, show }) => {
    const groupId = useSelector(selectGroupId);
    const [channelName, setChannelName] = useState("");
    const dialogRef = useOutsideAlerter(() => {
        handleCloseDialogRoutine();
    });

    const handleCloseDialogRoutine = () => {
        setChannelName("");
        handleCloseDialog();
    }

    const handleAddChannel = () => {
        if (channelName !== "") {
            db.collection('groups')
                .doc(groupId)
                .collection('channels')
                .add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    channelName: channelName,
                });
        }

        handleCloseDialogRoutine();
    }

    return (
        <div
            className={show ? "bg_dialog display_block" : "bg_dialog display_none"}
        >
            <div
                className="dialog_main"
                ref={dialogRef}
            >
                <h3>Create new channel </h3>

                <div className="new_channel_input">
                    <input
                        placeholder="new channel"
                        onChange={(e) => setChannelName(e.target.value)}
                        value={channelName}
                    />
                </div>


                <button 
                    className="cancel_channel_button"
                    onClick={handleCloseDialogRoutine}
                >
                    cancel
                </button>
                <button
                    className="create_channel_button"
                    onClick={handleAddChannel}
                    disabled={channelName === ""}
                >
                    create
                </button>
            </div>

        </div>
    )
}

export default NewChannelDialog;
