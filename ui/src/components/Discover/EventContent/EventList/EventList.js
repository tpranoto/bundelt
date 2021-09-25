import React from 'react';
import './EventList.css';
import cat from './../../../../assets/cat2.png';


const EventList = ({title}) => {
    return (
        <div className="events_container">
            <div className="events_container_title">
                <h3>{title}</h3>
            </div>

            <div className="events_list">
                <Event />

                <Event />

                <Event />

                <Event />

                <Event />
            </div>

        </div>
    )
}

export default EventList;


const Event = () => {
    return (
        <div className="event_details">
            <div className="event_details_img">
                <img src={cat} alt="" />
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
