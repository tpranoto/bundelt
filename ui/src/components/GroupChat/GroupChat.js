import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './GroupChat.css';
import ChatContent from './ChatContent/ChatContent';
import { selectUser } from '../../slices/userSlice';
import { selectGroupId, selectGroupName } from '../../slices/groupSlice';

const GroupChat = () => {
    const user = useSelector(selectUser);
    const groupId = useSelector(selectGroupId);
    const groupName = useSelector(selectGroupName);

    useEffect(() => {

    }, [groupId])

    return (
        <div className="chat">
            <ChatContent
                user={user}
                groupId={groupId}
                groupName={groupName}
            />
        </div>
    )
}

export default GroupChat;
