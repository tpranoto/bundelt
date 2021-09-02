import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import './GroupChat.css';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatContent from './ChatContent/ChatContent';
import { selectUser } from '../../slices/userSlice';
import { selectGroupId, selectGroupName } from '../../slices/groupSlice';

const GroupChat = () => {
    const user = useSelector(selectUser);
    const groupId = useSelector(selectGroupId);
    const groupName = useSelector(selectGroupName);
    const [showMembers, setShowMembers] = useState(true);

    return (
        <div className="chat">
            <ChatHeader 
                groupName={groupName} 
                setShowMembers={()=>setShowMembers(!showMembers)}
            />

            <ChatContent 
                user={user}
                groupId={groupId}   
                groupName={groupName}
                showMembers={showMembers}
            />
        </div>
    )
}

export default GroupChat;
