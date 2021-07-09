import React from 'react';
import './Home.css'
import FriendPage from './FriendPage/FriendPage.js';
import EventPage from './EventPage/EventPage.js';
import { useSelector } from 'react-redux';
import { selectHomeTabState } from '../../slices/appSlice.js';

const Home = () => {
    const homeTab = useSelector(selectHomeTabState);

    return (
        <div className="home">
            {
                homeTab === "friends" ? (
                    <FriendPage />
                ) : (
                    <EventPage />
                )
            }

        </div>
    )
}

export default Home;
