import React from 'react';
import { Avatar } from '@material-ui/core';
import './Member.css';

const Member = ({photo, displayName}) =>{
    return (
        <div className="chat_group_member_profile">
            <Avatar
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
