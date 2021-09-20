import React from 'react';
import './Home.css';
import NextEvent from './NextEvent/NextEvent';
import NextEventGroup from './NextEventGroup/NextEventGroup';

const Home = () => {
    return (
        <div className="home">
            <div className="home_inside">
                <NextEvent />

                <NextEventGroup />
            </div>
        </div>
    )
}

export default Home;
