import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/roundedlogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTabState, setEventTabState, setGroupTabState, setMainTabState } from '../../slices/appSlice';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import EventIcon from '@material-ui/icons/Event';
import { useOutsideAlerter } from '../../utils/helper/helper.js';
import ProfileDropdownBox from '../DropdownBox/ProfileDropdownBox/ProfileDropdownBox';
import InboxIcon from '@material-ui/icons/Inbox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';


const Header = ({ user }) => {
    const dispatch = useDispatch();
    const headerTab = useSelector(selectMainTabState);

    const handleHome = () => {
        dispatch(setMainTabState({
            mainTabState: "home",
        }));
    }

    return (
        <div className="header">
            <div
                className="header_logo_cont"
            >
                <div
                    className="header_logo"
                    onClick={handleHome}
                >
                    <img
                        src={logo}
                        alt=""
                    />
                </div>

                <div className="header_location_search">
                    <input placeholder="Location" />
                    <MyLocationIcon />
                </div>
            </div>

            <div className="header_buttons">
                <div 
                    className={headerTab === "home" ? "header_tab selected_tab" : "header_tab"}
                    onClick={()=>{
                        dispatch(
                            setMainTabState({
                                mainTabState: "home",
                            })
                        );
                    }}    
                >
                    <HomeIcon />
                </div>

                <div 
                    className={headerTab === "group" ? "header_tab selected_tab" : "header_tab"}
                    onClick={()=>{
                        dispatch(
                            setMainTabState({
                                mainTabState: "group",
                            })
                        );

                        dispatch(
                            setGroupTabState({
                                groupTabState: "home",
                            })
                        );
                    }}      
                >
                    <GroupIcon />
                </div>

                <div 
                    className={headerTab === "event" ? "header_tab selected_tab" : "header_tab"}
                    onClick={()=>{
                        dispatch(
                            setMainTabState({
                                mainTabState: "event",
                            })
                        );

                        dispatch(
                            setEventTabState({
                                eventTabState: "home",
                            })
                        );
                    }}      
                >
                    <EventIcon />
                </div>

            </div>

            <HeaderProfile user={user} />
        </div>
    )
}

export default Header;


const HeaderProfile = ({ user }) => {
    const dispatch = useDispatch();
    const headerTab = useSelector(selectMainTabState);
    const [displayProfileDropBox, setDisplayProfileDropBox] = useState(false);
    const dialogRef = useOutsideAlerter(() => {
        setDisplayProfileDropBox(false);
    });

    return (
        <div
            className="header_right"
        >
            <div 
                className={headerTab==="user"?"header_profile header_profile_selected":"header_profile"}
                onClick={()=>{
                    dispatch(setMainTabState({
                        mainTabState: "user",
                    }));
                }}
            >
                <Avatar
                    id="header_avatar_profile"
                >
                    {user.initials}
                </Avatar>

                <span>{getFirstName(user.displayName)}</span>
            </div>

            <MoreVertIcon
                id="header_notification"
            />

            <InboxIcon
                id="header_notification"
            />

            <ArrowDropDownIcon
                id="header_notification"
                onClick={() => setDisplayProfileDropBox(!displayProfileDropBox)}
            />

            {
                displayProfileDropBox && (
                    <ProfileDropdownBox
                        user={user}
                        ref={dialogRef}
                    />
                )
            }

        </div>
    )
}

const getFirstName = (name) => {
    const names = name.split(' ');
    if (names.length <= 1) {
        return name;
    }
    return names[0];
}
