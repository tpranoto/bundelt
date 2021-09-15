import React from 'react';
import './Event.css';
import { Avatar } from '@material-ui/core';
import cat from './../../../../../assets/cat.jpeg';

const Event = () => {
    return (
        <div className="event_container">
            <div className="event_container_header">
                {/* <Avatar
                    id="event_container_header_img"
                    variant="square"
                /> */}

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
                        <h4 className="event_details_cont_event_name">Pokemon Go Wed Raid</h4>
                        <h5 className="event_details_cont_event_desc">This is the description • Jakarta, Indonesia </h5>

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
                {/* 
                <div className="event_container_content_right">
                    <div
                        className="event_container_content_join_button"
                    >
                        Join
                    </div>

                    <div
                        className="event_container_content_invite_button"
                    >
                        Invite
                    </div>

                    <div className="event_container_content_person_going">
                        10 person going
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Event;
