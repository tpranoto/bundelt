import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SidebarEvent.css';
import { setSidebarTabState, selectSidebarTabState } from '../../../slices/appSlice';
import EventIcon from '@material-ui/icons/Event';

const SidebarEvent = () => {
    const dispatch = useDispatch();
    const sidebarTab = useSelector(selectSidebarTabState);

    const handleEventTab = () => {
        dispatch(
            setSidebarTabState({
                sidebarTabState: "event",
            })
        );
    };

    return (
        <div className="sidebar_event_div">
            <div
                className={sidebarTab === "event" ? "sidebar_event_selected" : "sidebar_event"}
                onClick={handleEventTab}
            >
                <EventIcon className="sidebar_event_icon" />

                <div className="sidebar_event_title_container">
                    <span className="sidebar_event_title">Events</span>
                </div>
            </div>

        </div>
    );
};

export default SidebarEvent;
