import React from 'react';
import './Friend.css';
import { Avatar } from '@material-ui/core';

const Friend = ({photo,displayName}) =>{
    return (
        <div className="friend_page_profile">
           <Avatar
                className="friend_avatar"
                id="friend_avatar_id"
                src={photo}
            />

            <div className="friend_page_display_name">
                <h3>{displayName}</h3>
            </div>
        </div>
    )
}

export default Friend;
