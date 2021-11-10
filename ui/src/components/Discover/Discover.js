import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectHomeTabState, setHomeTabState } from '../../slices/appSlice';
import './Discover.css'
import EventContent from './EventContent/EventContent.js';
import GroupContent from './GroupContent/GroupContent';

const Discover = () => {
    const dispatch = useDispatch();
    const homeTab = useSelector(selectHomeTabState);

    return (
        <div className="discover_lala">
            <div className="discover_tabs">
                <div
                    className={homeTab === "events" ? "discover_tab selected_discover_tab" : "discover_tab"}
                    onClick={() => dispatch(setHomeTabState({
                        homeTabState: "events",
                    }))}
                >
                    <h4>Events</h4>
                </div>

                <div
                    className={homeTab === "groups" ? "discover_tab selected_discover_tab" : "discover_tab"}
                    onClick={() => dispatch(setHomeTabState({
                        homeTabState: "groups",
                    }))}
                >
                    <h4>Groups</h4>
                </div>
            </div>

            {
                homeTab === "events" ? (
                    <EventContent />
                ) : (
                    <GroupContent />
                )
            }
        </div>
    )
}

export default Discover;
