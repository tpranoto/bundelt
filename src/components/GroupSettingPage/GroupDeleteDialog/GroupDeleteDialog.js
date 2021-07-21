import React from 'react';
import { useOutsideAlerter } from '../../../utils/helper/helper.js';
import './GroupDeleteDialog.css';
import db from '../../../utils/firebase/firebase';
import { useDispatch } from 'react-redux';
import { setAppInfo } from '../../../slices/appSlice.js';

const GroupDeleteDialog = ({ handleCloseDialog, handleCloseSettingPage, groupId, groupName }) => {
    const dispatch = useDispatch();
    const dialogRef = useOutsideAlerter(() => {
        handleCloseDialog();
    });

    const handleDeleteDialog = () => {
        db.collection('groups')
            .doc(groupId)
            .delete()

        handleCloseDialog();
        handleCloseSettingPage();

        //reset group focus to home
        dispatch(
            setAppInfo({
                groupState: "home",
            })
        );
    }

    return (
        <div
            className="bg_dialog display_block"
        >
            <div
                className="group_delete_dialog_main"
                ref={dialogRef}
            >
                <h3>Delete Group</h3>
                <p>Are you sure you want to delete {groupName}? This cannot be undone</p>

                <button
                    className="cancel_group_delete_button"
                    onClick={handleCloseDialog}
                >
                    cancel
                </button>
                <button
                    className="delete_group_button"
                    onClick={handleDeleteDialog}
                >
                    delete
                </button>
            </div>
        </div>
    )
}

export default GroupDeleteDialog;
