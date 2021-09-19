import React from 'react';
import './NextEventGroup.css';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import { useDispatch } from 'react-redux';
import { setHomeTabState, setSidebarTabState } from '../../../slices/appSlice';

const EmptyNextEventGroup = () => {
    const dispatch = useDispatch();

    const handleGoToGroup = () => {
        dispatch(setHomeTabState({
            homeTabState: "groups",
        }));

        dispatch(setSidebarTabState({
            sidebarTabState: "discover",
        }));
    }

    return (
        <div className="empty_event_group">
            <SentimentDissatisfiedIcon />

            <h4>Your groups don’t have many events right now</h4>

            <div
                className="go_to_discover_group_button"
                onClick={handleGoToGroup}
            >
                Discover Groups
            </div>
        </div>
    )
}


const NextEventGroup = () =>{
    return (
        <div className="next_event_group_container">
            <div className="home_next_event_groups">
                <h2>Scheduled events from your groups</h2>
            </div>

            <div className="closest_event_group_container">
                <EmptyNextEventGroup />
            </div>

        </div>
    )
}

export default NextEventGroup;
