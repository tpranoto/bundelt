import React from 'react';
import { useSelector } from 'react-redux';
import { selectEventTabState } from '../../slices/appSlice';
import DiscoverEvent from './DiscoverEvent';
import './Event.css';
import EventHome from './EventHome';
import Sidebar from './Sidebar';

const Event = () => {
    const eventState = useSelector(selectEventTabState);

    return (
        <div className="event">
            <Sidebar />

            {
                eventState === "home" ? (
                    <EventHome />
                ) : eventState === "discover" ? (
                    <DiscoverEvent />
                ) : eventState.startsWith("event_") ? (
                    <div />
                ) : (
                    <div>
                        Page Not Found
                    </div>
                )
            }
        </div>
    )
}

export default Event;
