import React, { useEffect, useState } from 'react';
import './MemberList.css';
import Member from './Member/Member';
import db from '../../../../utils/firebase/firebase';

const MemberList = ({ groupId }) => {
    const [groupMembers, setGroupMembers] = useState([]);

    useEffect(() => {
        if (groupId) {
            db.collection('groups')
                .doc(groupId)
                .collection('members')
                .onSnapshot((snapshot) =>
                    setGroupMembers(snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    })))
                )
        }
    })

    return (
        <div className="chat_content_member">
            {
                groupMembers.map(({ id, data }) => (
                    <Member
                        initials={data.initials}
                        displayName={data.displayName}
                    />
                ))
            }
        </div>
    )
}

export default MemberList;
