import React, { useState, useEffect } from 'react';
import './ChatContent.css';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message/Message.js';
import MemberList from './MemberList/MemberList.js';
import db from '../../../utils/firebase/firebase';
import firebase from 'firebase';
import { useRef } from 'react';

const ChatContent = ({ user, groupId, groupName, showMembers }) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        if (groupId) {
            db.collection('groups')
                .doc(groupId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [groupId])

    useEffect(scrollToBottom, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('groups')
            .doc(groupId)
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user,
            })

        setInput("");
    }

    return (
        <div className="chat_content">
            <div className="chat_content_main">
                <div className="chat_messages">
                    {messages.map(message => (
                        <Message
                            timestamp={message.timestamp}
                            user={message.user}
                            message={message.message}
                        />
                    ))}

                    <div ref={messagesEndRef} />
                </div>

                <div className="chat_input">
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={`Message #${groupName}`}
                            disabled={!groupId}
                        />
                        <button
                            className="chat_input_button"
                            type="submit"
                            disabled={!groupId || input === ""}
                            onClick={sendMessage}
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="chat_input_icons">
                        <EmojiEmotionsIcon fontSize="large" />
                    </div>
                </div>
            </div>

            {
                showMembers && (
                    <MemberList groupId={groupId} />
                )
            }

        </div>
    )
}

export default ChatContent;
