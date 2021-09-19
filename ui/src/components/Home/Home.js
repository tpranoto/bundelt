import React from 'react';
import './Home.css';
import NextEvent from './NextEvent/NextEvent';
import NextEventGroup from './NextEventGroup/NextEventGroup';
import SponsoredEvents from './SponsoredEvents/SponsoredEvents';

const Home = () => {
    return (
        <div className="home">
            <div className="home_inside">
                <SponsoredEvents />

                <NextEvent />

                <NextEventGroup />
            </div>
        </div>
    )
}

export default Home;
