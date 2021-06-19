import React from 'react';
import './Group.css';
import { useDispatch } from 'react-redux';
import { setGroupInfo } from '../../../../../slices/groupSlice';
import { Avatar } from '@material-ui/core'

const Group = ({ id, groupName }) => {
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
        <div className="group" onClick={handleGroupChange}>
            <h4 className="group_name">
                <Avatar />
                <span>{groupName}</span>
            </h4>
        </div>
    );
}

export default Group;
