import React from 'react';
import './MemberList.css';
import Member from './Member/Member.js';

const MemberList = ({ groupMembers }) => {
    return (
        <div className="chat_content_member">
            {
                groupMembers.map(({ roleName, members }) => (
                    <>
                        <div className="chat_content_member_role_name">
                            <h4>{`${roleName} - ${members.length}`}</h4>
                        </div>

                        {
                            members.map(({photo, displayName}) => (
                                <Member
                                    photo={photo}
                                    displayName={displayName}
                                />
                            ))
                        }


                    </>
                ))
            }
        </div>
    )
}

export default MemberList;
