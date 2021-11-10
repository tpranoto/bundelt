import React, { useState } from 'react';
import EventList from './EventList/EventList';
import EventSidebar from './EventSidebar/EventSidebar';
import './Event.css';

const Event = () => {
    const [dateSelected, setDateSelected] = useState(new Date());

    return (
        <div className="event">
            <EventList dateSelected={dateSelected}/>

            <EventSidebar dateSelected={dateSelected} setDateSelected={setDateSelected}/>
        </div>
    )
}

export default Event;
