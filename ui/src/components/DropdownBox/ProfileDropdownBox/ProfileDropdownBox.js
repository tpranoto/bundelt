import React from 'react';
import './ProfileDropdownBox.css';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import { useDispatch } from 'react-redux';
import { logout } from '../../../slices/userSlice';
import { resetGroupInfo } from '../../../slices/groupSlice';
import { setSidebarTabState } from '../../../slices/appSlice';
import { Avatar } from '@material-ui/core';

const ProfileDropdownBox = ({ user, ref }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        //reset every state
        dispatch(logout());

        dispatch((resetGroupInfo()));

        dispatch(setSidebarTabState({
            sidebarTabState: "home",
        }));
    }

    return (
        <div className="profile_dropdown_box_bg" ref={ref}>
            <div className="profile_dropdown_box">
                <div className="profile_dropdown_info_box">
                    <Avatar
                        className="profile_dropdown_avatar"
                        id="profile_dropdown_avatar_profile"
                    >
                        {user.initials}
                    </Avatar>


                    <div className="profile_dropdown_info">
                        <h3>{user.displayName}</h3>
                        <p>Location</p>
                    </div>
                </div>

                <div
                    className="profile_dropdown_view_profile"
                >
                    <span>View Profile</span>
                    <FaceIcon />
                </div>

                <div className="profile_dropdown_preferences">
                    <span>Preferences</span>
                    <SettingsIcon />
                </div>

                <div
                    id="profile_dropdown_logout"
                    onClick={handleLogout}
                >
                    <span id="profile_dropdown_logout_title">Logout</span>
                    <ExitToAppIcon id="logout_icon" />
                </div>
            </div>
        </div>
    )
}

export default ProfileDropdownBox;
