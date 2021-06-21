import React from 'react';
import './Group.css';
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExploreIcon from '@material-ui/icons/Explore';

const Group = ({ id, groupName, pic, active, onClickFunc, iconType }) => {
    return (
        <div className="group_icon_container" onClick={onClickFunc}>
            {
                iconType === "add" ? (
                    <Avatar
                        className="group_icon"
                        variant='circular'
                    >
                        <AddIcon className="add_group_icon"/>
                    </Avatar>
                ) : iconType === "find" ? (
                    <Avatar
                        className="group_icon"
                        variant='circular'
                    >
                        <ExploreIcon className="find_group_icon"/>
                    </Avatar>
                ) : (
                    <Avatar
                        className="group_icon"
                        variant='circular'
                        src={pic}
                    />
                )
            }


            <hr className={active ? "active_group" : "not_active_group"} />
            {/* <h4 className="group_name">
                <span>{groupName}</span>
            </h4> */}
        </div>
    );
}

export default Group;
