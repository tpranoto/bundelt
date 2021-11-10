import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './EventSidebar.css';

const EventSidebar = ({ dateSelected, setDateSelected }) => {
    const handleChangeDate = (e) => {
        setDateSelected(e);
    }

    return (
        <div className="event_page_sidebar">
            <h4>Show events from calendar</h4>

            <div className="event_calendar_container">
                <Calendar
                    value={dateSelected}
                    onChange={handleChangeDate}
                />
            </div>
        </div>
    )
}

export default EventSidebar;
