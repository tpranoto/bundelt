import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Discover.css';
import DiscoverContent from './DiscoverContent/DiscoverContent';
import { selectUser } from '../../slices/userSlice';
import { selectGroupId } from '../../slices/groupSlice';

const Discover = () => {
    const user = useSelector(selectUser);
    const groupId = useSelector(selectGroupId);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch('/group/nearby?lat=' + user.lat + '&lon=' + user.lon + '&limit=10&offset=0')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            }).then((responseJson) => {
                setGroups(responseJson.map((doc) => ({
                    id: doc.group_id,
                    groupName: doc.group_name,
                    desc: doc.desc,
                    timestamp: doc.created,
                    distance: doc.distance,
                })));
            }).catch((error) => {
                console.log("error: ", error);
            });
    }, [groupId, user.lat, user.lon]);

    return (
        <div className="discover_page">
            <div
                className="discover_content_search_bg"
            >
                <h3>
                    Find Nearby Communities on Bundelt
                </h3>
            </div>

            {
                (groups.length === 0) ? (
                    <div className="discover_content_empty_groups">
                        It seems there are no groups nearby. Create a new group for others to find.
                    </div>
                ) : groups.map(({ id, groupName, desc, timestamp, distance }) => (
                    <DiscoverContent
                        groupId={id}
                        groupName={groupName}
                        groupDesc={desc}
                        groupTstamp={timestamp}
                        groupDistance={distance}
                    />
                ))
            }

        </div>
    );
};

export default Discover;
