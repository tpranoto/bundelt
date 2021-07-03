import React,{useState} from 'react';
import './GroupChat.css';
import ChatHeader from './ChatHeader/ChatHeader.js';
import ChatContent from './ChatContent/ChatContent.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { selectGroupId } from '../../slices/groupSlice';
import { selectChannelId, selectChannelName } from '../../slices/channelSlice';

const GroupChat = () => {
    const user = useSelector(selectUser);
    const groupId = useSelector(selectGroupId);
    const channelName = useSelector(selectChannelName);
    const channelId = useSelector(selectChannelId);
    const [showMembers, setShowMembers] = useState(true);

    return (
        <div className="chat">
            <ChatHeader 
                channelName={channelName} 
                setShowMembers={()=>setShowMembers(!showMembers)}
            />

            <ChatContent 
                user={user}
                groupId={groupId}   
                channelId={channelId}
                channelName={channelName}
                showMembers={showMembers}
            />
        </div>
    )
}

export default GroupChat;
