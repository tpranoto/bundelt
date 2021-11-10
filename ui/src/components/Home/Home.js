import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import EventContainer from '../EventContainer/EventContainer';
import GroupContainer from '../GroupContainer/GroupContainer';
import banner from '.././../assets/bg-comm.png';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />

            <div className="home_page">
                <div className="home_inside">
                    <h1>Welcome to Bundelt!</h1>

                    <div className="home_news_div">
                        <img src={banner} id="home_news_img" alt="" />
                    </div>

                    <h3>Popular Events Nearby</h3>
                    <div className="home_popular_events">
                        <EventContainer />

                        <EventContainer />

                        <EventContainer />
                    </div>

                    <h3>Popular Groups Nearby</h3>
                    <div className="home_popular_groups">
                        <GroupContainer />

                        <GroupContainer />

                        <GroupContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
