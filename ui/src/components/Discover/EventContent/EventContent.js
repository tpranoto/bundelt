import React from 'react';
import './EventContent.css';
import EventList from './EventList/EventList';

const EventContent = () => {
    return (
        <div className="event_content">
            <div className="event_content_inside">
                <EventList
                    title="Featured Events"
                />

                <EventList
                    title="Sports Events"
                />

                <EventList
                    title="Games Events"
                />

                <EventList
                    title="Business Events"
                />
            </div>
        </div>
    )
};

export default EventContent;
