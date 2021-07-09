import React from 'react';
import './FriendList.css';
import Friend from './Friend/Friend.js';

const FriendList = () =>{
    return(
        <div className="friend_page_list">
            <div className="friend_page_list_header">
                <h4>Online - 5</h4>
            </div>

            <Friend displayName="example" />
            <Friend displayName="2" />

        </div>
    )
}

export default FriendList;
