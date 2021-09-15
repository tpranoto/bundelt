import React from 'react';
import './EventPage.css';
import EventHeader from './EventHeader/EventHeader';
import EventContent from './EventContent/EventContent';


const EventPage = () =>{
    return (
        <div className="event_page">
            <EventHeader />
            <EventContent />
        </div>
    )
}

export default EventPage;
