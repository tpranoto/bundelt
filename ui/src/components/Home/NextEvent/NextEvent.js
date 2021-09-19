import React from 'react';
import './NextEvent.css';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import { useDispatch } from 'react-redux';
import { setHomeTabState, setSidebarTabState } from '../../../slices/appSlice';

const EmptyNextEvent = () => {
    const dispatch = useDispatch();

    const handleGoToEvent = () => {
        dispatch(setHomeTabState({
            homeTabState: "events",
        }));

        dispatch(setSidebarTabState({
            sidebarTabState: "discover",
        }));
    }

    return (
        <div className="empty_event">
            <SentimentDissatisfiedIcon />

            <h4>You are not attending any events</h4>

            <div
                className="go_to_discover_event_button"
                onClick={handleGoToEvent}
            >
                Discover Events
            </div>
        </div>
    )
}

const NextEvent = () => {
    const dispatch = useDispatch();

    return (
        <div className="next_event_container">
            <div className="home_next_events">
                <h2>Your next event</h2>
                <div 
                    className="see_all_events_button"
                    onClick={()=>{
                        dispatch(setSidebarTabState({
                            sidebarTabState: "event",
                        }));
                    }}
                >
                    See all your events
                </div>
            </div>

            <div className="closest_event_container">
                <EmptyNextEvent />
            </div>

        </div>
    )
}

export default NextEvent;
