import React from 'react';
import './FeatureEvents.css';
import pic from '../../../../assets/husky.png';

const FeatureEvents = () =>{
    return (
        <div className="sponsored_events_container">
            <div className="sponsored_events_title">
                <h3>Featured Events Nearby</h3>
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

export default FeatureEvents;


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
