import React, { useEffect, useState } from 'react';
import './Discover.css';
import DiscoverContent from './DiscoverContent/DiscoverContent';
import db from '../../utils/firebase/firebase';

const Discover = () => {
    const [groups, setGroups] = useState([]);


    useEffect(() => {
        db.collection('groups').onSnapshot((snapshot) =>
            setGroups(snapshot.docs.map((doc) => ({
                id: doc.id,
                group: doc.data(),
            })))
        );
    }, []);

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
                groups.map(({ id, group }) => (
                    <DiscoverContent
                        groupId={id}
                        groupName={group.groupName}
                        groupDesc={group.desc}
                        groupTstamp={group.timestamp}
                    />
                ))
            }
        </div>
    );
};

export default Discover;
