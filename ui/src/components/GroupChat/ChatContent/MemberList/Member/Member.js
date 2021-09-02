import React from 'react';
import './Member.css';
import { Avatar } from '@material-ui/core';


const Member = ({ photo, displayName }) => {
    return (
        <div className="chat_group_member_profile">
            <Avatar
                variant="square"
                className="member_avatar"
                id="member_avatar_id"
                src={photo}
            />

            <div className="chat_group_member_name">
                <h3>{displayName}</h3>
            </div>
        </div>
    )
}

export default Member;
