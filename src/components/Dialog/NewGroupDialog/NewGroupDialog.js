import React,{ useState }  from 'react';
import { useDispatch } from 'react-redux';
import './NewGroupDialog.css';
import db from '../../../utils/firebase/firebase';
import { useOutsideAlerter } from '../../../utils/helper/helper.js';
import firebase from 'firebase';
import { setGroupInfo } from '../../../slices/groupSlice';
import { setSidebarTabState } from '../../../slices/appSlice';

const NewGroupDialog = ({ handleCloseGroupDialog }) => {
    const dispatch = useDispatch();
    const [groupName, setGroupName] = useState("");
    const [desc, setDesc] = useState("");
    const dialogRef = useOutsideAlerter(() => {
        handleCloseDialogRoutine();
    });

    const handleCloseDialogRoutine = () => {
        setGroupName("");
        setDesc("");
        handleCloseGroupDialog();
    };

    const handleAddChannel = () => {
        if (groupName !== "") {
            db.collection('groups')
                .add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    groupName: groupName,
                    desc: desc,
                }).then((docRef) => {
                    dispatch(
                        setSidebarTabState({
                            sidebarTabState: docRef.id,
                        })
                    );

                    dispatch(
                        setGroupInfo({
                            groupId: docRef.id,
                            groupName: docRef.groupName,
                        })
                    );
                });
        }

        handleCloseDialogRoutine();
    };

    return (
        <div className="bg_dialog">
            <div
                className="group_dialog_main"
                ref={dialogRef}
            >
                <h2>Create a group</h2>

                <p className="create_group_directions">
                    You can find people with same interests in your area with groups. They’re best when organized around the interest - cycling, for example
                </p>

                <h4>Name</h4>

                <div className="new_group_input">
                    <input
                        id="new_group_name_input"
                        placeholder="e.g. new-group"
                        onChange={(e) => setGroupName(e.target.value)}
                        value={groupName}
                    />
                </div>

                <h4>
                    Description
                    <span> (Optional)</span>
                </h4>

                <div className="new_group_input">
                    <input
                        id="new_group_description_input"
                        placeholder="What's the group about?"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                    />
                </div>

                <div className="new_group_buttons">
                    <span
                        className="cancel_group_button"
                        onClick={handleCloseDialogRoutine}
                    >
                        Cancel
                    </span>

                    <button
                        className="create_group_button"
                        onClick={handleAddChannel}
                        disabled={groupName === ""}
                    >
                        Create
                    </button>
                </div>
            </div>

        </div>
    )
}

export default NewGroupDialog;
