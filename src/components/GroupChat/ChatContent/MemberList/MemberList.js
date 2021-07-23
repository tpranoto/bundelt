import React from 'react';
import './MemberList.css';
import Member from './Member/Member.js';
import { useEffect } from 'react';
import { useState } from 'react';
import db from '../../../../utils/firebase/firebase';

const MemberList = ({ groupId }) => {
    const [groupMembers, setGroupMembers] = useState([]);

    useEffect(() => {
        if (groupId) {
            db.collection('groups')
                .doc(groupId)
                .collection('groupmembers')
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
                        groupId={groupId}
                        groupMemberId={id}
                        groupMemberData={data}
                    />
                ))
            }
        </div>
    )
}

export default MemberList;
