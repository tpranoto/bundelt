import React from 'react';
import './FriendHeader.css';
import PersonIcon from '@material-ui/icons/Person';
import InboxIcon from '@material-ui/icons/Inbox';
import HelpIcon from '@material-ui/icons/Help';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFriendTabState, setFriendTabState } from '../../../../slices/appSlice.js';
import { useDispatch } from 'react-redux';

const FriendHeader = () => {
    const dispatch = useDispatch();
    const friendTab = useSelector(selectFriendTabState);
    const [friendSection, setFriendSection] = useState(friendTab);

    const handleOnlineTab = () => {
        setFriendSection("online");
        dispatch(
            setFriendTabState({
                friendTabState: "online",
            })
        );
    };

    const handleAllTab = () => {
        setFriendSection("all");
        dispatch(
            setFriendTabState({
                friendTabState: "all",
            })
        );
    }

    const handlePendingTab = () => {
        setFriendSection("pending");
        dispatch(
            setFriendTabState({
                friendTabState: "pending",
            })
        );
    }

    const handleBlockedTab = () => {
        setFriendSection("blocked");
        dispatch(
            setFriendTabState({
                friendTabState: "blocked",
            })
        );
    }

    return (
        <div className="home_header">
            <div className="home_header_left">
                <PersonIcon className="friends_icon" />
                <div>
                    <h4>Friends</h4>
                </div>

                <div className="friends_header_div" />

                <div
                    className={friendSection === "online" ? "selected_home_header_tab" : "home_header_tab"}
                    onClick={handleOnlineTab}
                >
                    <h4>Online</h4>
                </div>

                <div
                    className={friendSection === "all" ? "selected_home_header_tab" : "home_header_tab"}
                    onClick={handleAllTab}
                >
                    <h4>All</h4>
                </div>

                <div
                    className={friendSection === "pending" ? "selected_home_header_tab" : "home_header_tab"}
                    onClick={handlePendingTab}
                >
                    <h4>Pending</h4>
                </div>

                <div
                    className={friendSection === "blocked" ? "selected_home_header_tab" : "home_header_tab"}
                    onClick={handleBlockedTab}
                >
                    <h4>Blocked</h4>
                </div>

                <div className="add_friend_button">
                    <h5>Add Friend</h5>
                </div>
            </div>

            <div className="home_header_right">
                <InboxIcon />
                <HelpIcon />
            </div>
        </div>
    )
}

export default FriendHeader;
