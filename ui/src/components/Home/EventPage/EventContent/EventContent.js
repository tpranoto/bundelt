import React from 'react';
import './EventContent.css';
import Event from './Event/Event';

const EventContent = () =>{
    return(
        <div className="event_content">
            <Event />

            <Event />
        </div>
    )
};

export default EventContent;
