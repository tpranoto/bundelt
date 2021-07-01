import React from 'react';
import './Group.css';
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExploreIcon from '@material-ui/icons/Explore';
import { useState } from 'react';

const Group = ({ id, groupName, pic, active, onClickFunc, iconType }) => {
    const [groupActive, setGroupActive] = useState(false);
    const [clicked, setClicked] = useState(false);

    const showGroupTip = () => {
        if (!clicked){
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

            <div
                className="group_avatar_info"
            >
                {
                    iconType === "add" ? (
                        <Avatar
                            className="group_icon"
                            variant='circular'
                            onMouseEnter={showGroupTip}
                            onMouseLeave={hideGroupTip}
                        >
                            <AddIcon className="add_group_icon" />
                        </Avatar>
                    ) : iconType === "find" ? (
                        <Avatar
                            className="group_icon"
                            variant='circular'
                            onMouseEnter={showGroupTip}
                            onMouseLeave={hideGroupTip}
                        >
                            <ExploreIcon className="find_group_icon" />
                        </Avatar>
                    ) : (
                        <Avatar
                            className="group_icon"
                            variant='circular'
                            src={pic}
                            onMouseEnter={showGroupTip}
                            onMouseLeave={hideGroupTip}
                        />
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


            <hr className={active ? "active_group" : "not_active_group"} />
            {/* <h4 className="group_name">
                <span>{groupName}</span>
            </h4> */}
        </div>
    );
}

export default Group;
