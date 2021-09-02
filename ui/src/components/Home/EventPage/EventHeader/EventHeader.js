import React from 'react';
import './EventHeader.css';
import EventNoteIcon from '@material-ui/icons/EventNote';

const EventHeader = () => {
    return (
        <div className="event_header">
            <div className="event_header_left">
                <EventNoteIcon className="event_header_icon" />
                
                <div className="event_header_title">
                    <h4>Event</h4>
                </div>
            </div>

        </div>
    )
}

export default EventHeader;
