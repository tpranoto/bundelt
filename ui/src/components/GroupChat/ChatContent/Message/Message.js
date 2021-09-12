import React from 'react';
import './Message.css'
import { Avatar } from '@material-ui/core'


const Message = ({ timestamp, user, message }) => {
    return (
        <div className="message">
            <Avatar>{user.initials}</Avatar>
            <div className="message_info">
                <h4>
                    {user.displayName}
                    <span className="message_timestamp">
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>

                <p>{message}</p>
            </div>
        </div>
    );
}

export default Message;
