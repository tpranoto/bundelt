import React from 'react';
import './EventHome.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const EventHome = () => {
    return (
        <div className="event_home_page">
            <div className="event_home_page_inside">
                <div className="next_event_container">
                    <div className="home_next_events">
                        <h2>Your next event</h2>
                        <div
                            className="see_all_events_button"
                            onClick={() => {
                                // dispatch(setMainTabState({
                                //     mainTabState: "event",
                                // }));
                            }}
                        >
                            See all your events
                        </div>
                    </div>

                    <div className="closest_event_container">
                        <div className="empty_event">
                            <CalendarTodayIcon />

                            <h4>You are not attending any events</h4>

                            <div
                                className="go_to_discover_event_button"
                            // onClick={handleGoToEvent}
                            >
                                Discover Events
                            </div>
                        </div>
                    </div>
                </div>

                <div className="next_event_group_container">
                    <div className="home_next_event_groups">
                        <h2>Scheduled events from your groups</h2>
                    </div>

                    <div className="closest_event_group_container">
                        <div className="empty_event_group">
                            <CalendarTodayIcon />

                            <h4>Your groups don’t have events right now</h4>

                            <div
                                className="go_to_discover_group_button"
                            // onClick={handleGoToGroup}
                            >
                                Discover Groups
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EventHome;
