import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './NewGroupDialog.css';
import { useOutsideAlerter } from '../../../utils/helper/helper.js';
import { setGroupInfo } from '../../../slices/groupSlice';
import { setGroupTabState } from '../../../slices/appSlice';
import { selectUser } from '../../../slices/userSlice';

const NewGroupDialog = ({ handleCloseGroupDialog }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [groupName, setGroupName] = useState("");
    const [desc, setDesc] = useState("");
    const [loc, setLoc] = useState({
        lat: 0,
        lon: 0,
    });

    const handleCloseDialogRoutine = () => {
        setGroupName("");
        setDesc("");
        handleCloseGroupDialog();
    };

    const dialogRef = useOutsideAlerter(() => {
        handleCloseDialogRoutine();
    });

    const handleAddGroup = () => {
        if (groupName !== "") {
            let tstamp = new Date().toUTCString();

            fetch('/user_group_detail/add', {
                method: "POST",
                body: JSON.stringify({
                    user_id: user.uid,
                    group_name: groupName,
                    desc: desc,
                    created: tstamp,
                    lat: loc.lat,
                    lon: loc.lon,
                })
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            }).then((responseJson) => {
                dispatch(
                    setGroupInfo({
                        groupId: responseJson.group_id,
                        groupName: groupName,
                        desc: desc,
                        timestamp: tstamp,
                    })
                );

                dispatch(
                    setGroupTabState({
                        groupTabState: "group_" + responseJson.group_id,
                    })
                );
            }).catch((error) => {
                console.log("error: ", error);
            })

        }
        handleCloseDialogRoutine();
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLoc({
                lat: parseFloat(position.coords.latitude.toFixed(3)),
                lon: parseFloat(position.coords.longitude.toFixed(3)),
            });
        });
    }, []);

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
                        onClick={handleAddGroup}
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
