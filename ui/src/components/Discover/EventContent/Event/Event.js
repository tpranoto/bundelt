import React from 'react';
import './Event.css';
import cat from './../../../../assets/cat2.png';

const Event = () => {
    return (
        <div className="event_container">
            <div className="event_container_header">
                <h3>Cycling Permata Buana</h3>
            </div>
            
            <div className="event_container_content">
                <div className="event_container_content_div">
                    <div
                        className="event_details_container_img"
                    >
                        <img src={cat} alt="" />
                    </div>

                    <div className="event_details_container">
                        <h4 className="event_details_cont_time">Sun, 12 Sep 2021 21:04:42 GMT - Sun, 12 Sep 2021 21:04:42 GMT</h4>
                        <h4 className="event_details_cont_event_name">Pokemon Go Wed Raid • Jakarta, Indonesia</h4>
                        <h5 className="event_details_cont_event_desc">This is the description </h5>

                        <div className="event_details_footer">
                            <div className="event_details_footer_attendees">
                                10 attendees
                            </div>

                            <div
                                className="event_details_footer_invite"
                            >
                                Invite
                            </div>

                            <div
                                className="event_details_footer_join"
                            >
                                Join
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;
