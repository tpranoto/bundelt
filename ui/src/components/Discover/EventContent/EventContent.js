import React from 'react';
import './EventContent.css';
import Event from './Event/Event';
import FeatureEvents from './FeaturedEvents/FeaturedEvents';

const EventContent = () => {
    return (
        <div className="event_content">
            <div className="event_content_inside">
                <FeatureEvents />

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
