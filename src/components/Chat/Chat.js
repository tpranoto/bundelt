import React, { useState, useEffect } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader/ChatHeader.js'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message/Message.js'
import { useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { selectGroupId } from '../../slices/groupSlice';
import { selectChannelId, selectChannelName } from '../../slices/channelSlice';
import db from '../../utils/firebase/firebase';
import firebase from 'firebase';

const Chat = () => {
    const user = useSelector(selectUser);
    const groupId = useSelector(selectGroupId);
    const channelName = useSelector(selectChannelName);
    const channelId = useSelector(selectChannelId);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (groupId && channelId) {
            db.collection('groups')
                .doc(groupId)
                .collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [groupId,channelId])

    const sendMessage = e =>{
        e.preventDefault();

        db.collection('groups')
            .doc(groupId)
            .collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                message:input,
                user:user,
        })

        setInput("");
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat_messages">
                {messages.map(message => (
                    <Message 
                        timestamp={message.timestamp}
                        user={message.user}
                        message={message.message}
                    />
                ))}
            </div>

            <div className="chat_input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`Message #${channelName}`}
                        disabled={!groupId}
                    />
                    <button
                        className="chat_input_button"
                        type="submit"
                        disabled={!groupId}
                        onClick={sendMessage}
                    >
                        Send Message
                    </button>
                </form>

                <div className="chat_input_icons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat;
