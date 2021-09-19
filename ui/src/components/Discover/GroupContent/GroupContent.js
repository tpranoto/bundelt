import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './GroupContent.css';
import Group from './Group/Group';
import { selectUser } from '../../../slices/userSlice';
import { selectGroupId } from '../../../slices/groupSlice';

const GroupContent = () => {
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
                setGroups(responseJson.map((doc) => ({
                    id: doc.group_id,
                    joined: doc.joined,
                    groupName: doc.group_name,
                    desc: doc.desc,
                    timestamp: doc.created,
                    distance: doc.distance,
                    members: doc.members,
                })));
            }).catch((error) => {
                console.log("error: ", error);
            });
    }, [groupId, user.uid, user.lat, user.lon]);

    return (
        <div className="group_content">
            <div className="group_content_inside">
                {
                    (groups.length === 0) ? (
                        <div className="group_content_empty">
                            It seems there are no groups nearby. Create a new group for others to find.
                        </div>
                    ) : groups.map(({ id, joined, groupName, desc, timestamp, distance, members }) => (
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
        </div>
    );
};

export default GroupContent;
