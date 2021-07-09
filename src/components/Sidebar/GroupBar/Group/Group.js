import React from 'react';
import './Group.css';
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExploreIcon from '@material-ui/icons/Explore';
import Tooltip from '@material-ui/core/Tooltip';
import { getInitials } from '../../../../utils/helper/helper.js';
import { makeStyles } from '@material-ui/core/styles';

const groupTooltipStyle = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        fontSize: 13,
        fontWeight: 600,
    },
}));

const Group = ({ id, groupName, pic, active, onClickFunc, iconType }) => {
    const tooltipStyle = groupTooltipStyle();

    return (
        <div
            className="group_icon_container"
            onClick={() => {
                onClickFunc();
            }}
        >

            <div className={active ? "active_group" : "not_active_group"} />

            <div
                className="group_avatar_info"
            >
                {
                    iconType === "add" ? (
                        <Tooltip
                            id="group_tooltip"
                            classes={tooltipStyle}
                            title="Create"
                            placement="right"
                            arrow
                        >
                            <Avatar
                                className="group_icon add_group_icon"
                                variant='circular'
                            >
                                <AddIcon className="add_group_icon" />
                            </Avatar>
                        </Tooltip>
                    ) : iconType === "discover" ? (
                        <Tooltip
                            id="group_tooltip"
                            classes={tooltipStyle}
                            title="Discover"
                            placement="right"
                            arrow
                        >
                            <Avatar
                                className="group_icon"
                                variant='circular'
                            >
                                <ExploreIcon className="discover_group_icon" />
                            </Avatar>
                        </Tooltip>
                    ) : iconType === "home" ? (
                        <Tooltip
                            id="group_tooltip"
                            classes={tooltipStyle}
                            title="Home"
                            placement="right"
                            arrow
                        >
                            <Avatar
                                className="group_icon home_group_icon"
                                variant='circular'
                                src={pic}
                            />
                        </Tooltip>
                    ) : (
                        <Tooltip
                            id="group_tooltip"
                            classes={tooltipStyle}
                            title={groupName}
                            placement="right"
                            arrow
                        >
                            <Avatar
                                className="group_icon"
                                id="group_bar_group"
                                variant='circular'
                            >{getInitials(groupName)}</Avatar>
                        </Tooltip>

                    )
                }
            </div>

        </div>
    );
}

export default Group;
