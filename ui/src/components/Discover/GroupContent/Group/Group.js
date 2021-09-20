import React from 'react';
import './Group.css';
import cat from './../../../../assets/cat.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../../slices/userSlice';
import { setGroupInfo } from '../../../../slices/groupSlice';
import { setSidebarTabState } from '../../../../slices/appSlice';

const Group = ({ groupId, groupJoined, groupName, groupDesc, groupTstamp, groupDistance, groupMembers }) => {
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
        <div className="group_container">
            <div className="group_container_header">
                <h3>{groupName}</h3>
            </div>

            <div className="group_container_content">
                <div className="group_container_content_div">
                    <div
                        className="group_details_container_img"
                    >
                        <img src={cat} alt="" />
                    </div>

                    <div className="group_details_container">
                        <h5 className="group_details_cont_group_desc">{groupDesc}</h5>

                        <div className="group_details_cont_tags">
                            <GroupTag tag="cars" />
                            <GroupTag tag="cycling" />
                        </div>

                        <div className="group_details_footer">
                            <div className="group_details_footer_members">
                                {groupMembers} members • {groupDistance} km away
                            </div>

                            {
                                groupJoined ? (
                                    <div className="group_details_footer_joined">
                                        Joined
                                    </div>
                                ) : (
                                    <div
                                        className="group_details_footer_join"
                                        onClick={handleJoinGroup}
                                    >
                                        Join
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Group;


const GroupTag = ({tag}) =>{
    return (
        <div className="discover_group_tag">
            {tag}
        </div>
    )
}
