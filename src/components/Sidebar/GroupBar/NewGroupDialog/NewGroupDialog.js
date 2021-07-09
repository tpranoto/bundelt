import React from 'react';
import { useState } from 'react';
import { useOutsideAlerter } from '../../../../utils/helper/helper.js';
import db from '../../../../utils/firebase/firebase';
import firebase from 'firebase';
import './NewGroupDialog.css';

const NewGroupDialog =({ handleCloseDialog,handleGroupIcon, show }) =>{
    const [groupName, setGroupName] = useState("");
    const dialogRef = useOutsideAlerter(() => {
        handleCloseDialogRoutine();
    });

    const handleCloseDialogRoutine = () => {
        setGroupName("");
        handleCloseDialog();
    };

    const handleAddGroup = () => {
        if (groupName !== "") {
            db.collection('groups').add({
                groupName: groupName,
            }).then((docRef) => {
                handleGroupIcon(docRef.id, groupName);

                db.collection('groups')
                    .doc(docRef.id)
                    .collection('channels')
                    .add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        channelName: "general",
                    });
            });
        }
        handleCloseDialogRoutine();
    }

    return (
        <div
            className={show ? "bg_dialog display_block" : "bg_dialog display_none"}
        >
            <div
                className="group_dialog_main"
                ref={dialogRef}
            >
                <h3>Create new group </h3>

                <div className="new_group_input">
                    <input
                        placeholder="new group"
                        onChange={(e) => setGroupName(e.target.value)}
                        value={groupName}
                    />
                </div>


                <button 
                    className="cancel_group_button"
                    onClick={handleCloseDialogRoutine}
                >
                    cancel
                </button>
                <button
                    className="create_group_button"
                    onClick={handleAddGroup}
                    disabled={groupName === ""}
                >
                    create
                </button>
            </div>
        </div>
    )
}

export default NewGroupDialog;
