import React, { useEffect, useState } from 'react';
import './GroupInfo.css';
import defbg from '../../assets/longgroupbg.jpg';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import PollIcon from '@material-ui/icons/Poll';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector } from 'react-redux';
import { selectGroupDesc, selectGroupId, selectGroupName, selectGroupTimestamp } from '../../slices/groupSlice';
import { getInitials } from '../../utils/helper/helper';
import { Avatar } from '@material-ui/core';
import { selectUser } from '../../slices/userSlice';
import NewEventDialog from '../Dialog/NewEventDialog/NewEventDialog';

const GroupInfo = () => {
    const user = useSelector(selectUser);
    const groupId = useSelector(selectGroupId);
    const groupName = useSelector(selectGroupName);
    const [groupMembers, setGroupMembers] = useState([]);
    const [tabState, setTabState] = useState("about");

    useEffect(() => {
        if (groupId) {
            fetch('/group/member?group_id=' + groupId)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                }).then((data) => {
                    setGroupMembers(data.map((doc) => ({
                        id: doc.user_id,
                        initials: getInitials(doc.full_name),
                        name: doc.full_name,
                        lat: doc.lat,
                        lon: doc.lon,
                    })));
                }).catch((error) => {
                    console.log("error: ", error);
                });
        }
    }, [groupId])

    return (
        <div className="group_info_page">
            <div className="group_info_page_scrollable">
                <div className="group_info_header">
                    <div
                        className="group_info_container_img"
                    >
                        <img src={defbg} alt="" />
                    </div>

                    <div className="group_info_container_name">
                        <h1 className="group_info_name">{groupName}</h1>
                    </div>

                    <div className="group_info_container_attr">
                        <span>{groupMembers.length} members • Jakarta, Indonesia</span>

                        <div className="group_info_invite_button">
                            Invite
                        </div>
                    </div>

                    <hr className="group_info_hr" />

                    <div className="group_info_container_last">
                        <div className="group_info_header_tabs">
                            <div
                                className="group_info_header_tab_container"
                                onClick={() => setTabState("about")}
                            >
                                <div className={tabState === "about" ? "selected_group_info_header_tab" : "group_info_header_tab"}>
                                    About
                                </div>

                                <hr className={tabState === "about" ? "selected_group_info_header_tab_hr" : "group_info_header_tab_hr"} />
                            </div>

                            <div
                                className="group_info_header_tab_container"
                                onClick={() => setTabState("discussion")}
                            >
                                <div className={tabState === "discussion" ? "selected_group_info_header_tab" : "group_info_header_tab"}>
                                    Discussion
                                </div>

                                <hr className={tabState === "discussion" ? "selected_group_info_header_tab_hr" : "group_info_header_tab_hr"} />
                            </div>

                            <div
                                className="group_info_header_tab_container"
                                onClick={() => setTabState("channels")}
                            >
                                <div className={tabState === "channels" ? "selected_group_info_header_tab" : "group_info_header_tab"}>
                                    Channels
                                </div>

                                <hr className={tabState === "channels" ? "selected_group_info_header_tab_hr" : "group_info_header_tab_hr"} />
                            </div>

                            <div
                                className="group_info_header_tab_container"
                                onClick={() => setTabState("members")}
                            >
                                <div className={tabState === "members" ? "selected_group_info_header_tab" : "group_info_header_tab"}>
                                    Members
                                </div>

                                <hr className={tabState === "members" ? "selected_group_info_header_tab_hr" : "group_info_header_tab_hr"} />
                            </div>

                            <div
                                className="group_info_header_tab_container"
                                onClick={() => setTabState("events")}
                            >
                                <div className={tabState === "events" ? "selected_group_info_header_tab" : "group_info_header_tab"}>
                                    Events
                                </div>

                                <hr className={tabState === "events" ? "selected_group_info_header_tab_hr" : "group_info_header_tab_hr"} />
                            </div>
                        </div>

                        <div className="group_info_header_tab_options">
                            <MoreHorizIcon />
                        </div>
                    </div>
                </div>

                {
                    tabState === "about" ? (
                        <GroupInfoAboutContent />
                    ) : tabState === "discussion" ? (
                        <GroupInfoDiscussionContent user={user} groupId={groupId} />
                    ) : tabState === "members" ? (
                        <GroupInfoMemberContent groupMembers={groupMembers} />
                    ) : tabState === "events" ? (
                        <GroupInfoEventContent />
                    ) :
                        <div>
                            reee
                        </div>
                }

            </div>
        </div>
    )
}

export default GroupInfo;


const GroupInfoAboutContent = () => {
    const groupDesc = useSelector(selectGroupDesc);
    const groupCreateAt = useSelector(selectGroupTimestamp);

    return (
        <div className="group_info_about_content">
            <div className="group_info_about_details">
                <h3 className="group_info_about_details_title">About This Group</h3>

                <hr className="group_info_about_details_hr" />

                <div className="group_info_about_group_setting">
                    <h5>Private</h5>
                    <span>Only members can see who's in the group and what they post.</span>
                </div>

                <div className="group_info_about_group_history">
                    <h5>History</h5>
                    <span>Group created on {groupCreateAt}.</span>
                </div>

                <div className="group_info_about_group_desc">
                    <h5>Description</h5>
                    <span>{groupDesc}</span>
                </div>
            </div>

            <div className="group_info_rule_details">
                <h3 className="group_info_rule_details_title">Rules or Guidelines or Group Conducts</h3>

                <hr className="group_info_rule_details_hr" />

                <div className="group_info_rule_details_content">
                    <span>1. Good soldiers follow orders</span>
                    <span>2. Good soldiers follow orders</span>
                    <span>3. Good soldiers follow orders</span>
                    <span>4. Good soldiers follow orders</span>
                    <span>5. Good soldiers follow orders</span>
                </div>
            </div>
        </div>
    )
}

const GroupInfoDiscussionContent = ({ user, groupId }) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [updated, setUpdated] = useState(0);

    useEffect(() => {
        setTimeout(() => {
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
        }, 1000);
    }, [groupId, updated])

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
        <div className="group_info_discussion_content">
            <div className="group_info_disc_create_post">
                <div className="group_info_disc_create_post1">
                    <Avatar className="group_info_disc_avatar" id="group_info_disc_avatar_id">{user.initials}</Avatar>

                    <div className="group_info_disc_input_div">
                        <form>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={`Write something...`}
                            />
                            <button
                                className="group_info_disc_submit_button"
                                type="submit"
                                disabled={!groupId || input === ""}
                                onClick={sendMessage}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="group_info_disc_hr" />

                <div className="group_info_disc_tabs">
                    <div className="group_info_disc_tab">
                        <PermMediaIcon />

                        <h5>Photo/ Video</h5>
                    </div>

                    <div className="group_info_disc_tab">
                        <PollIcon />

                        <h5>Poll</h5>
                    </div>
                </div>
            </div>

            {
                messages.map(msg => (
                    <GroupInfoDiscussionContentPost
                        timestamp={msg.timestamp}
                        message={msg.msg}
                        initials={msg.initials}
                        name={msg.name}
                    />
                ))}

        </div>
    )
}

const GroupInfoDiscussionContentPost = ({ timestamp, message, initials, name }) => {
    return (
        <div className="group_info_disc_content_post">
            <div className="group_info_disc_content_post_profile">
                <Avatar className="group_info_disc_post_avatar" id="group_info_disc_avatar_id">{initials}</Avatar>

                <div className="group_info_disc_post_name">
                    <h3>{name}</h3>

                    <span>{timestamp}</span>
                </div>
            </div>

            <div className="group_info_disc_post_message">
                {message}
            </div>
        </div>
    )
}

const GroupInfoMemberContent = ({ groupMembers }) => {
    return (
        <div className="group_info_member_content">
            <div className="group_info_about_member">
                <h3 className="group_info_member_title">Members • {groupMembers.length}</h3>

                <div className="group_info_member_search">
                    <input placeholder="Search Member" />
                    <SearchIcon />
                </div>

                <hr className="group_info_member_hr" />

                {
                    groupMembers.map(({ initials, name }) => (
                        <div className="group_info_member_profile">
                            <Avatar
                                className="group_info_member_avatar"
                                id="group_info_member_avatar_id"
                            >
                                {initials}
                            </Avatar>

                            <div className="group_info_member_name">
                                <h3>{name}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const GroupInfoEventContent = () => {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div className="group_info_event_content">
            <div className="group_info_event_upcoming">
                <div className="group_info_event_upcoming_title">
                    <h3>Upcoming Events</h3>

                    <div
                        className="group_info_event_upcoming_title_button"
                        onClick={() => { setOpenDialog(true) }}
                    >
                        Create Event
                    </div>
                </div>

                {
                    openDialog && <NewEventDialog handleCloseNewEventDialog={() => setOpenDialog(false)} />
                }

                <hr />

                <div className="group_info_event_upcoming_empty">
                    No Upcoming Event
                </div>

            </div>
        </div>
    )
}
