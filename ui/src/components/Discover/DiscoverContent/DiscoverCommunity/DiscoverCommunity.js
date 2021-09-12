import React from 'react';
import './DiscoverCommunity.css';
import cat from '../../../../assets/cat.jpeg';

const DiscoverCommunity = ({ groupName, groupDesc, groupDistance, groupMembers }) => {
    return (
        <div className="discover_content_container">
            <div className="discover_content_community">
                <div
                    className="discover_content_community_pic"
                >
                    <img src={cat} alt="" />
                </div>

                <div className="discover_content_community_description">
                    <h4>{groupName}</h4>
                    <p>{groupDesc}</p>

                    <h6>{groupMembers} members - {groupDistance} km away</h6>
                </div>
            </div>
        </ div>
    )
};

export default DiscoverCommunity;
