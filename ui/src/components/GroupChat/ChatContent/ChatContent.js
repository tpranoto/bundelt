import React, { useState, useEffect, useRef } from 'react';
import './ChatContent.css';
import Message from './Message/Message';
import GroupDetails from './GroupDetails/GroupDetails';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { getInitials } from '../../../utils/helper/helper';


const ChatContent = ({ user, groupId, groupName }) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [updated, setUpdated] = useState(0);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        setTimeout(() => {}, 3000);
        if (groupId) {
            fetch('/message/group?group_id=' + groupId)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                }).then((data) => {
                    setMessages(data.map((doc) => ({
                        user_id: doc.user_id,
                        initials: getInitials(doc.full_name),
                        name: doc.full_name,
                        group_id: doc.group_id,
                        msg: doc.msg,
                        timestamp: doc.create_time,
                    })));
                }).catch((error) => {
                    console.log("error: ", error);
                });
        }
    }, [groupId, updated])

    useEffect(scrollToBottom, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();

        fetch('/message/group/add', {
            method: "POST",
            body: JSON.stringify({
                user_id: user.uid,
                group_id: parseInt(groupId, 10),
                msg: input,
            })
        }).catch((error) => {
            console.log("error: ", error);
        })

        setInput("");
        setUpdated(updated + 1);
    }

    return (
        <div className="chat_content">
            <div className="chat_content_main">
                <div className="chat_messages">
                    {messages.map(msg => (
                        <Message
                            timestamp={msg.timestamp}
                            message={msg.msg}
                            initials={msg.initials}
                            name={msg.name}
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

            <GroupDetails />

        </div>
    )
}

export default ChatContent;
