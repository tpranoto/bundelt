import React from 'react';
import './DiscoverCommunity.css';
import cat from '../../../../assets/cat.jpeg';
import { Avatar } from '@material-ui/core';

const DiscoverCommunity = ({ commName, commDesc }) => {
    return (
        <div className="discover_content_container">
            <div className="discover_content_community">
                <div
                    className="discover_content_community_pic"
                >
                    <img src={cat} alt="" />
                </div>

                <div className="discover_content_community_description">
                    <Avatar id="community_icon" />
                    <h4>{commName}</h4>
                    <p>{commDesc}</p>

                    <h6>1000 members - 2.1 km away</h6>
                </div>
            </div>

            <hr className="community_separator" />
        </ div>
    )
};

export default DiscoverCommunity;
