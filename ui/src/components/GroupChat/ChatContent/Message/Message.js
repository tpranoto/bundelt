import React from 'react';
import './Message.css'
import { Avatar } from '@material-ui/core'


const Message = ({ timestamp, initials, name, message }) => {
    return (
        <div className="message">
            <Avatar>{initials}</Avatar>
            <div className="message_info">
                <h4>
                    {name}
                    <span className="message_timestamp">
                        {timestamp}
                    </span>
                </h4>

                <p>{message}</p>
            </div>
        </div>
    );
}

export default Message;
