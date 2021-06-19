import React, { useState } from 'react';
import './GroupList.css'
import Group from '../Group/Group.js'
import db from '../../../../../firebase';
import { useEffect } from 'react';



const GroupList = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        db.collection('groups').onSnapshot((snapshot) =>
            setGroups(snapshot.docs.map((doc) => ({
                id: doc.id,
                group: doc.data(),
            })))
        );
    }, [])

    return (
        <div className="group_list">
            <div>
                {groups.map(({ id, group }) => (
                    <Group key={id} id={id} groupName={group.groupName} />
                ))}
            </div>
        </div>
    )
}

export default GroupList;
