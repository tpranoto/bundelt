import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DiscoverContent.css';
import DiscoverCommunity from './DiscoverCommunity/DiscoverCommunity';
import { selectUser } from '../../../slices/userSlice';
import { setGroupInfo } from '../../../slices/groupSlice';
import { setSidebarTabState } from '../../../slices/appSlice';

const DiscoverContent = ({ groupId, groupName, groupDesc, groupTstamp, groupDistance, groupMembers }) => {
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

            dispatch(setSidebarTabState({
                sidebarTabState: "group_" + groupId,
            }));
        }).catch((error) => {
            console.log("error: ", error);
        });
    };

    return (
        <div className="discover_content">
            <DiscoverCommunity
                groupName={groupName}
                groupDesc={groupDesc}
                groupDistance={groupDistance}
                groupMembers={groupMembers}
            />

            <div className="discover_right_content">
                <div
                    className="discover_comm_button_join"
                    onClick={handleJoinGroup}
                >
                    Join
                </div>
            </div>

        </div>
    )
}

export default DiscoverContent;
