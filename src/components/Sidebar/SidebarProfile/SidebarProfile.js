import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarProfile.css';
import { useState } from 'react';
import UserSettingPage from '../../UserSettingPage/UserSettingPage';

const SidebarProfile = ({ user }) => {
    const [displayUserSetting, setDisplayUserSetting] = useState(false);

    return (
        <div 
            className="sidebar_profile"
            onClick={()=>setDisplayUserSetting(true)}
        >
            <Avatar
                variant="square"
                className="avatar"
                id="avatar_profile"
                src={user.photo}
            />

            <div className="sidebar_profile_info">
                <h3>{user.displayName}</h3>
                <p>Location</p>
            </div>

            {
                displayUserSetting && (
                    <UserSettingPage handleClose={() => setDisplayUserSetting(false)} />
                )
            }

        </div>
    )
}

export default SidebarProfile;
