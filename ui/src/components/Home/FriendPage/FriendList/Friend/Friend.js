import React from 'react';
import './Friend.css';
import { Avatar } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const friendTooltipStyle = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        fontSize: 13,
        fontWeight: 600,
    },
}));

const Friend = ({ photo, displayName }) => {
    const tooltipStyle = friendTooltipStyle();

    return (
        <div className="friend_page_profile">
            <div className="friend_page_div" />

            <div className="friend_page_profile_info">
                <div className="friend_avatar">
                    <Avatar
                        id="friend_avatar_id"
                        src={photo}
                    />

                    <div className="friend_page_display_name">
                        <h4>{displayName}</h4>
                    </div>
                </div>

                <div className="friend_page_friend_option">
                    <Tooltip
                        id="friend_tooltip"
                        classes={tooltipStyle}
                        title="Message"
                        placement="top"
                        arrow
                    >
                        <Avatar
                            id="friend_option_id"
                        >
                            <ChatBubbleIcon />
                        </Avatar>
                    </Tooltip>

                    <Tooltip
                        id="friend_tooltip"
                        classes={tooltipStyle}
                        title="More"
                        placement="top"
                        arrow
                    >
                        <Avatar
                            id="friend_option_id"
                        >
                            <MoreVertIcon />
                        </Avatar>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default Friend;
