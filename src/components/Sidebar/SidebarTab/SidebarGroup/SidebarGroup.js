import React from 'react';
import './SidebarGroup.css';
import { useDispatch } from 'react-redux';
import { setGroupInfo } from '../../../../slices/groupSlice';
import { Avatar } from '@material-ui/core'

const SidebarGroup = ({ id, groupName }) => {
    const dispatch = useDispatch();

    const handleGroupChange = () => {
        dispatch(
            setGroupInfo({
                groupId: id,
                groupName: groupName,
            })
        )
    }

    return (
        <div className="sidebar_group" onClick={handleGroupChange}>
            <h4 className="sidebar_group_name">
                <Avatar />
                <span>{groupName}</span>
            </h4>
        </div>
    );
}

export default SidebarGroup;
