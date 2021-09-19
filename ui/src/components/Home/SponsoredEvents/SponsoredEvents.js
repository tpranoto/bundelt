import React from 'react';
import './SponsoredEvents.css';
import pic from '../../../assets/husky.png';

const SponsoredEvents = () =>{
    return (
        <div className="sponsored_events_container">
            <div className="sponsored_events_title">
                <h2>Sponsored Events Nearby</h2>
            </div>

            <div className="sponsored_events_list">
                <SponsoredEvent />

                <SponsoredEvent />

                <SponsoredEvent />

                <SponsoredEvent />

                <SponsoredEvent />
            </div>

        </div>
    )
}

export default SponsoredEvents;


const SponsoredEvent = () =>{
    return(
        <div className="sponsored_event">
            <div className="sponsored_event_img">
                <img src={pic} alt="" />
            </div>

            <h4 className="sponsored_event_title"> Sponsored Event Name</h4>

            <span className="sponsored_event_attendees_count">100 attendees</span>

        </div>
    )
}
