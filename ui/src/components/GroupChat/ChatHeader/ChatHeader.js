import React, { useState } from 'react';
import './ChatHeader.css';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import GroupInfoDialog from '../../Dialog/GroupInfoDialog/GroupInfoDialog';

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
    
    const [openGroupInfo, setOpenGroupInfo] = useState(false);

    return (
        <div className="chat_header">
            <div
                className="chat_header_left"
                onClick={() => setOpenGroupInfo(true)}
            >
                <div className="chat_header_title">
                    <span># {groupName} </span>
                </div>

                <ExpandMoreIcon id="chat_header_title_expand" />
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

            {
                openGroupInfo && (
                    <GroupInfoDialog handleCloseGroupDialog={() => setOpenGroupInfo(false)} />
                )
            }
        </div>
    );
}

export default ChatHeader;
