import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './NewGroupDialog.css';
import db from '../../../utils/firebase/firebase';
import { useOutsideAlerter } from '../../../utils/helper/helper.js';
import { setGroupInfo } from '../../../slices/groupSlice';
import { setSidebarTabState } from '../../../slices/appSlice';
import { selectUser } from '../../../slices/userSlice';

const NewGroupDialog = ({ handleCloseGroupDialog }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [groupName, setGroupName] = useState("");
    const [desc, setDesc] = useState("");

    const handleCloseDialogRoutine = () => {
        setGroupName("");
        setDesc("");
        handleCloseGroupDialog();
    };

    const dialogRef = useOutsideAlerter(() => {
        handleCloseDialogRoutine();
    });

    const handleAddChannel = () => {
        let lat;
        let lon;
        navigator.geolocation.getCurrentPosition((position) => {
            lat = parseFloat(position.coords.latitude).toFixed(3);
            lon = parseFloat(position.coords.longitude).toFixed(3);
        });
        if (groupName !== "") {
            let tstamp = new Date().toUTCString();
            db.collection('groups')
                .add({
                    timestamp: tstamp,
                    groupName: groupName,
                    desc: desc,
                }).then((docRef) => {
                    const addGroups = async () => {
                        const resp = await fetch('/user_group_detail/add', {
                            method: "POST",
                            body: JSON.stringify({
                                user_fb_id: user.uid,
                                group_id: docRef.id,
                                group_name: groupName,
                                desc: desc,
                                created: tstamp,
                                lat: lat,
                                lon: lon,
                            })
                        });

                        const res = await resp.json();
                        console.log(res);
                    };
                    addGroups();

                    db.collection('groups')
                        .doc(docRef.id)
                        .collection('members')
                        .add({
                            user_id: user.uid,
                            photo: user.photo,
                            displayName: user.displayName,
                        });

                    dispatch(
                        setSidebarTabState({
                            sidebarTabState: docRef.id,
                        })
                    );

                    dispatch(
                        setGroupInfo({
                            groupId: docRef.id,
                            groupName: groupName,
                            desc: desc,
                            timestamp: tstamp,
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
