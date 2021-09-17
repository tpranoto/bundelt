import React, { useState } from 'react';
import './Discover.css'
import EventContent from './EventContent/EventContent.js';
import GroupContent from './GroupContent/GroupContent';

const Discover = () => {
    const [tabState, setTabState] = useState("events");

    return (
        <div className="discover">
            <div className="discover_tabs">
                <div 
                    className={tabState === "events" ? "discover_tab selected_discover_tab" : "discover_tab"}
                    onClick = {()=>setTabState("events")}
                >
                    <h4>Events</h4>
                </div>

                <div 
                    className={tabState === "groups" ? "discover_tab selected_discover_tab" : "discover_tab"}
                    onClick = {()=>setTabState("groups")}
                >
                    <h4>Groups</h4>
                </div>
            </div>

            {
                tabState === "events"?(
                    <EventContent />
                ):(
                    <GroupContent />
                )
            }
        </div>
    )
}

export default Discover;
