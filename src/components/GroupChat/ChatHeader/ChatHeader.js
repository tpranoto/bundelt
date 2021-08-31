import React from 'react';
import './ChatHeader.css';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
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

const ChatHeader = ({ groupName, setShowMembers }) => {
    const tooltipStyle = headerGroupTooltipStyle();

    return (
        <div className="chat_header">
            <div className="chat_header_left">
                <h3>
                    <span>{groupName}</span>
                </h3>
            </div>

            <div className="chat_header_right">
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
            </div>
        </div>
    );
}

export default ChatHeader;
