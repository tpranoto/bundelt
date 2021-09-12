import React, { useEffect, useState } from 'react';
import './MemberList.css';
import Member from './Member/Member';
import { getInitials } from '../../../../utils/helper/helper';

const MemberList = ({ groupId }) => {
    const [groupMembers, setGroupMembers] = useState([]);

    useEffect(() => {
        if (groupId) {
            fetch('/group/member?group_id='+groupId)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            }).then((data) => {
                setGroupMembers(data.map((doc) => ({
                    id: doc.user_id,
                    initials: getInitials(doc.full_name),
                    name: doc.full_name,
                    lat: doc.lat,
                    lon: doc.lon,
                })));
            }).catch((error) => {
                console.log("error: ", error);
            });
        }
    },[groupId])

    return (
        <div className="chat_content_member">
            {
                groupMembers.map(({ initials, name }) => (
                    <Member
                        initials={initials}
                        displayName={name}
                    />
                ))
            }
        </div>
    )
}

export default MemberList;
