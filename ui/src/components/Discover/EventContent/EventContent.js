import React from 'react';
import './EventContent.css';
import Event from './Event/Event';

const EventContent = () => {
    return (
        <div className="event_content">
            <div className="event_content_inside">
                <Event />

                <Event />

                <Event />

                <Event />

                <Event />
            </div>
        </div>
    )
};

export default EventContent;
