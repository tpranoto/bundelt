import React from 'react';
import './FriendPage.css';
import FriendHeader from './FriendHeader/FriendHeader.js';
import FriendList from './FriendList/FriendList.js';
import FriendActivity from './FriendActivity/FriendActivity';

const FriendPage = () => {
    return (
        <div className="friend_page">
            <FriendHeader />

            <div className="friend_page_content">
                <FriendList />

                <FriendActivity />
            </div>
        </div>
    )
}

export default FriendPage;
