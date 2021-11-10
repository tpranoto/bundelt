import React, { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './NewEventDialog.css';
import { selectUser } from '../../../slices/userSlice';
import { useOutsideAlerter } from '../../../utils/helper/helper.js';
import { selectGroupId } from '../../../slices/groupSlice';
import { setEventTabState, setMainTabState } from '../../../slices/appSlice';
import { setEventInfo } from '../../../slices/eventSlice';

const NewEventDialog = ({ handleCloseNewEventDialog }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const groupID = useSelector(selectGroupId);
    const [eventName, setEventName] = useState("");
    const [desc, setDesc] = useState("");

    const handleCloseDialogRoutine = () => {
        setEventName("");
        setDesc("");
        handleCloseNewEventDialog();
    };

    const dialogRef = useOutsideAlerter(() => {
        handleCloseDialogRoutine();
    });

    const handleAddEvent = () => {
        if (eventName !== "") {
            fetch('/event_group_detail/create', {
                method: "POST",
                body: JSON.stringify({
                    user_id: user.uid,
                    group_id: groupID,
                    event_name: eventName,
                    desc: desc,
                })
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            }).then((responseJson) => {
                dispatch(
                    setEventInfo({
                        eventId: responseJson.event_id,
                        eventName: eventName,
                        desc: desc,
                    })
                );

                dispatch(
                    setMainTabState({
                        mainTabState: "event",
                    })
                );

                dispatch(
                    setEventTabState({
                        eventTabState: "event_" + responseJson.event_id,
                    })
                );
            }).catch((error) => {
                console.log("error: ", error);
            })
        };
        handleCloseDialogRoutine();
    };

    return (
        <div className="bg_dialog">
            <div
                className="new_event_dialog_main"
                ref={dialogRef}
            >
                <h2>Create a event</h2>

                <p className="create_event_directions">
                    You can do activity with people with same interests with events. They’re best when organized around the interest - cycling, for example
                </p>

                <h4>Name</h4>

                <div className="new_event_input">
                    <input
                        id="new_event_name_input"
                        placeholder="e.g. new-event"
                        onChange={(e) => setEventName(e.target.value)}
                        value={eventName}
                    />
                </div>

                <h4>
                    Description
                    <span> (Optional)</span>
                </h4>

                <div className="new_event_input">
                    <input
                        id="new_event_description_input"
                        placeholder="What's the event about?"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                    />
                </div>

                <div className="new_event_buttons">
                    <span
                        className="cancel_event_button"
                        onClick={handleCloseDialogRoutine}
                    >
                        Cancel
                    </span>

                    <button
                        className="create_event_button"
                        onClick={handleAddEvent}
                        disabled={eventName === ""}
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewEventDialog;
