import React, { useState, useEffect } from 'react';
import './ChatContent.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message/Message.js';
import MemberList from './MemberList/MemberList.js';
import db from '../../../utils/firebase/firebase';
import firebase from 'firebase';

const mockMembers=[
    {
        roleName:"Admin",
        members:[
            {
                photo:"",
                displayName:"admin1"
            },
            {
                photo:"",
                displayName:"admin2"
            }
        ]
    },
    {
        roleName:"Moderators",
        members:[
            {
                photo:"",
                displayName:"mod1"
            },
            {
                photo:"",
                displayName:"mod2"
            },
            {
                photo:"",
                displayName:"mod3"
            }
        ]
    },
    {
        roleName:"Members",
        members:[
            {
                photo:"",
                displayName:"member1"
            },
            {
                photo:"",
                displayName:"reallyreallyreallyreallyreallylongmember2"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            },
            {
                photo:"",
                displayName:"member3"
            }
        ]
    }
];


const ChatContent = ({ user, groupId, channelId, channelName, showMembers }) => {
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
    }, [groupId, channelId])

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('groups')
            .doc(groupId)
            .collection('channels')
            .doc(channelId)
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
                            disabled={!groupId||input===""}
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

            {
                showMembers && (
                    <MemberList groupMembers={mockMembers}/>
                )
            }

        </div>
    )
}

export default ChatContent;
