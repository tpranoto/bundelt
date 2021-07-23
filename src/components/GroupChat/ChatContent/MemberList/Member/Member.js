import React from 'react';
import { Avatar } from '@material-ui/core';
import './Member.css';
import { useEffect } from 'react';
import { useState } from 'react';
import db from '../../../../../utils/firebase/firebase';

const Member = ({ groupId, groupMemberId, groupMemberData }) => {
    const [roleMembers, setRoleMembers] = useState([]);

    useEffect(() => {
        if (groupId) {
            db.collection('groups')
                .doc(groupId)
                .collection('groupmembers')
                .doc(groupMemberId)
                .collection('members')
                .onSnapshot((snapshot) =>
                    setRoleMembers(snapshot.docs.map((doc) => ({
                        data: doc.data(),
                    })))
                )
        }
    }, [groupId, groupMemberId])
    return (
        <>
            <div className="chat_content_member_role_name">
                <h4>{`${groupMemberData.roleName} - ${roleMembers.length}`}</h4>
            </div>

            {
                roleMembers.map(({ data }) => (

                    <div className="chat_group_member_profile">
                        <Avatar
                            className="member_avatar"
                            id="member_avatar_id"
                            src={data.photo}
                        />

                        <div className="chat_group_member_name">
                            <h3>{data.displayName}</h3>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Member;
