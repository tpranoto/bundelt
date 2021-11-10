import React from 'react';
import './EventContainer.css';
import abc from '../../assets/defevent.jpg';


const EventContainer = () => {
    return (
        <div className="event_details">
            <div className="event_details_img">
                <img src={abc} alt="" />
            </div>

            <h5 className="event_details_time">Sun, 12 Sep 2021 • 15:00 - 19:00 </h5>

            <h4 className="event_details_title">Cycling Sunday Gathering</h4>

            <p className="event_details_event_desc">This is the description of the event lalalallalalalalallalalalallalal </p>

            <span className="event_details_attendees_count">100 attendees • Jakarta, Indonesia</span>

            <div
                className="event_details_join"
            >
                Join
            </div>
        </div>
    )
}

export default EventContainer;
