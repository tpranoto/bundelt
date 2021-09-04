import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DiscoverContent.css';
import DiscoverCommunity from './DiscoverCommunity/DiscoverCommunity';
import { selectUser } from '../../../slices/userSlice';
import { setGroupInfo } from '../../../slices/groupSlice';
import { setSidebarTabState } from '../../../slices/appSlice';
import db from '../../../utils/firebase/firebase';

const DiscoverContent = ({ groupId, groupName, groupDesc, groupTstamp }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleJoinGroup = () => {
        const AddUserGroupRel = async () => {
            const resp = await fetch('/user_group/add', {
                method: "POST",
                body: JSON.stringify({
                    user_fb_id: user.uid,
                    group_id: groupId,
                })
            });
            const checkRes = await resp.json();
            console.log(checkRes);
        };
        AddUserGroupRel();

        db.collection('groups')
        .doc(groupId)
        .collection('members')
        .add({
            user_id: user.uid,
            photo: user.photo,
            displayName: user.displayName,
        });

        dispatch(setGroupInfo({
            groupId: groupId,
            groupName: groupName,
            desc: groupDesc,
            timestamp: groupTstamp,
        }));

        dispatch(setSidebarTabState({
            sidebarTabState: groupId,
        }));
    };

    return (
        <div className="discover_content">
            <DiscoverCommunity
                groupName={groupName}
                groupDesc={groupDesc}
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
