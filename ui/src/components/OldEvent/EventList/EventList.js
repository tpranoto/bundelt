import React, { useState } from 'react';
import { getDay, getMonth } from '../../../utils/date/date';
import './EventList.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const EventList = ({ dateSelected }) => {
    const [events, setEvents] = useState([]);
    const formattedDate = `${getDay(dateSelected.getDay())}, ${dateSelected.getDate()} ${getMonth(dateSelected.getMonth())} ${dateSelected.getFullYear()}`;

    return (
        <div className="event_content_container">
            <h2 className="event_content_title">Your Events</h2>

            <h3 className="event_title_date">{formattedDate}</h3>

            {
                events.length === 0 ? (
                    <EventListEmpty formattedDate={formattedDate} />
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}

export default EventList;


const EventListEmpty = ({ formattedDate }) => {
    return (
        <div className="event_list_empty_events">
            <CalendarTodayIcon id="empty_event_list_icon" />

            <h3>No events found for {formattedDate}</h3>
        </div>
    )
}
