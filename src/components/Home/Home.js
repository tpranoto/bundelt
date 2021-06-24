import React from 'react';
import './Home.css'
import FriendPage from './FriendPage/FriendPage.js';
import DiscoveryPage from './DiscoveryPage/DiscoveryPage.js';
import NewsPage from './NewsPage/NewsPage.js';
import { useSelector } from 'react-redux';
import { selectHomeTabState } from '../../slices/appSlice.js';

const Home = () => {
    const homeTab = useSelector(selectHomeTabState);

    return (
        <div className="home">
            {
                homeTab === "friends" ? (
                    <FriendPage />
                ) : homeTab ==="discovery"?(
                    <DiscoveryPage />
                ):(
                    <NewsPage />
                )
            }

        </div>
    )
}

export default Home;
