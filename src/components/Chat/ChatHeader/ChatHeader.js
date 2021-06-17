import React from 'react';
import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import InboxIcon from '@material-ui/icons/Inbox';
import HelpIcon from '@material-ui/icons/Help';
import { Avatar } from '@material-ui/core'

const ChatHeader = ({ channelName }) => {
    return (
        <div className="chat_header">
            <div className="chat_header_left">
                <h3>
                    <Avatar className="chat_header_avatar"/>
                    <span>{channelName}</span>
                </h3>
            </div>

            <div className="chat_header_right">
                <NotificationsIcon />
                <EditLocationIcon />
                <PeopleAltIcon />

                <div className="chat_header_search">
                    <input placeholder="Search" />
                    <SearchIcon />
                </div>

                <InboxIcon />
                <HelpIcon />
            </div>
        </div>
    );
}

export default ChatHeader;
