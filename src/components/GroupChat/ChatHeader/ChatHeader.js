import React from 'react';
import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import InboxIcon from '@material-ui/icons/Inbox';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const headerGroupTooltipStyle = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        fontSize: 13,
        fontWeight: 600,
    },
}));

const ChatHeader = ({ channelName, setShowMembers }) => {
    const tooltipStyle = headerGroupTooltipStyle();

    return (
        <div className="chat_header">
            <div className="chat_header_left">
                <h3>
                    <span>{channelName}</span>
                </h3>
            </div>

            <div className="chat_header_right">
                <div className="chat_header_right_options">
                    <NotificationsIcon />
                    <EditLocationIcon />
                    <Tooltip
                        id="header_group_tooltip"
                        classes={tooltipStyle}
                        title="Member List"
                        placement="bottom"
                        arrow
                    >
                        <PeopleAltIcon
                            onClick={setShowMembers}
                        />
                    </Tooltip>

                    <div className="chat_header_search">
                        <input placeholder="Search" />
                        <SearchIcon />
                    </div>

                    <div className="chat_header_option_right">
                        <Tooltip
                            id="header_group_tooltip"
                            classes={tooltipStyle}
                            title="Inbox"
                            placement="bottom"
                            arrow
                        >
                            <InboxIcon />
                        </Tooltip>

                        <Tooltip
                            id="header_group_tooltip"
                            classes={tooltipStyle}
                            title="Help"
                            placement="bottom"
                            arrow
                        >
                            <HelpIcon />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;
