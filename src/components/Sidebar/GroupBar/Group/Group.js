import React from 'react';
import './Group.css';
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExploreIcon from '@material-ui/icons/Explore';
import { useState } from 'react';
import { getInitials } from '../../../../utils/helper_func/helper.js';

const Group = ({ id, groupName, pic, active, onClickFunc, iconType }) => {
    const [groupActive, setGroupActive] = useState(false);
    const [clicked, setClicked] = useState(false);

    const showGroupTip = () => {
        if (!clicked) {
            setGroupActive(true);
        }
    };

    const hideGroupTip = () => {
        setClicked(false);
        setGroupActive(false);
    };

    return (
        <div
            className="group_icon_container"
            onClick={() => {
                onClickFunc();
                setClicked(true);
                setGroupActive(false);
            }}
        >

            <div className={active ? "active_group" : "not_active_group"} />

            <div
                className="group_avatar_info"
            >
                {
                    iconType === "add" ? (
                        <Avatar
                            className="group_icon add_group_icon"
                            variant='circular'
                            onMouseEnter={showGroupTip}
                            onMouseLeave={hideGroupTip}
                        >
                            <AddIcon className="add_group_icon" />
                        </Avatar>
                    ) : iconType === "find" ? (
                        <Avatar
                            className="group_icon find_group_icon"
                            variant='circular'
                            onMouseEnter={showGroupTip}
                            onMouseLeave={hideGroupTip}
                        >
                            <ExploreIcon className="find_group_icon" />
                        </Avatar>
                    ) :iconType === "home" ? (
                        <Avatar
                            className="group_icon home_group_icon"
                            variant='circular'
                            src={pic}
                            onMouseEnter={showGroupTip}
                            onMouseLeave={hideGroupTip}
                        />
                    ) : (
                        <Avatar
                            className="group_icon"
                            id="group_bar_group"
                            variant='circular'
                            onMouseEnter={showGroupTip}
                            onMouseLeave={hideGroupTip}
                        >{getInitials(groupName)}</Avatar>
                    )
                }

                {
                    groupActive && (
                        <div
                            className="tooltip_group"
                        >
                            {groupName}
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default Group;
