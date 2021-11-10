import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defbg from './../../assets/groupdefbg.jpg';
import './DiscoverGroup.css';
import { selectUser } from '../../slices/userSlice';
import { selectGroupId, setGroupInfo } from '../../slices/groupSlice';
import { setGroupTabState } from '../../slices/appSlice';

const DiscoverGroup = () => {
    const user = useSelector(selectUser);
    const groupId = useSelector(selectGroupId);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch('/group/nearby?user_id=' + user.uid + '&lat=' + user.lat + '&lon=' + user.lon + '&limit=10&offset=0')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            }).then((responseJson) => {
                const resGroup = responseJson.map((doc) => ({
                    id: doc.group_id,
                    joined: doc.joined,
                    groupName: doc.group_name,
                    desc: doc.desc,
                    timestamp: doc.created,
                    distance: doc.distance,
                    members: doc.members,
                }));

                const rows = [...Array(Math.ceil(resGroup.length / 3))];
                setGroups(rows.map((row, idx) => resGroup.slice(idx * 3, idx * 3 + 3)));
            }).catch((error) => {
                console.log("error: ", error);
            });
    }, [groupId, user.uid, user.lat, user.lon]);

    return (
        <div className="discover_group_content">
            <div className="discover_group_content_inside">
                {
                    (groups.length === 0) ? (
                        <div className="discover_group_content_empty">
                            It seems there are no groups nearby. Create a new group for others to find.
                        </div>
                    ) : groups.map(rows => (
                        <div className="discover_group_list_row">
                            {
                                rows.map(({ id, joined, groupName, desc, timestamp, distance, members }) => (
                                    <Group
                                        groupId={id}
                                        groupJoined={joined}
                                        groupName={groupName}
                                        groupDesc={desc}
                                        groupTstamp={timestamp}
                                        groupDistance={distance}
                                        groupMembers={members}
                                    />
                                ))
                            }
                        </div>
                    ))


                }
            </div>
        </div>
    );
};

export default DiscoverGroup;


const Group = ({ groupId, groupJoined, groupName, groupDesc, groupTstamp, groupDistance, groupMembers }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const distParsed = parseFloat(groupDistance.toFixed(2));

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

            dispatch(setGroupTabState({
                groupTabState: "group_" + groupId,
            }));
        }).catch((error) => {
            console.log("error: ", error);
        });
    };

    return (
        <div className="group_details_container">
            <div className="group_details_img">
                <img src={defbg} alt="" />
            </div>

            <h4 className="group_details_title">{groupName}</h4>

            <p className="group_details_desc">{groupDesc}</p>

            <div className="group_details_tags">
                <GroupTag tag="cycling"/>
                <GroupTag tag="test"/>
            </div>

            <span className="group_details_member_count">{groupMembers} members • {distParsed} km away</span>

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
    )
}

const GroupTag = ({ tag }) => {
    return (
        <div className="discover_group_tag">
            {tag}
        </div>
    )
}
