import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Group.css';
import GroupTemplate from './GroupTemplate/GroupTemplate';
import { selectUser } from '../../../../slices/userSlice';
import { setGroupInfo } from '../../../../slices/groupSlice';
import { setMainTabState } from '../../../../slices/appSlice';

const Group = ({ groupId, groupName, groupDesc, groupTstamp, groupDistance, groupMembers }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleJoinGroup = () => {
        fetch('/user_group/add', {
            method: "POST",
            body: JSON.stringify({
                user_id: user.uid,
                group_id: groupId,
            })
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
        }).then((data) => {
            dispatch(setGroupInfo({
                groupId: groupId,
                groupName: groupName,
                desc: groupDesc,
                timestamp: groupTstamp,
            }));

            dispatch(setMainTabState({
                mainTabState: "group_" + groupId,
            }));
        }).catch((error) => {
            console.log("error: ", error);
        });
    };

    return (
        <div className="group">
            <GroupTemplate
                groupName={groupName}
                groupDesc={groupDesc}
                groupDistance={groupDistance}
                groupMembers={groupMembers}
            />

            <div className="group_right_content">
                <div
                    className="group_join_button"
                    onClick={handleJoinGroup}
                >
                    Join
                </div>
            </div>

        </div>
    )
}

export default Group;
