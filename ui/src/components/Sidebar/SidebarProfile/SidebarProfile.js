import React, { useState } from 'react';
import './SidebarProfile.css';
import { useOutsideAlerter } from '../../../utils/helper/helper.js';
import ProfileDropdownBox from '../../DropdownBox/ProfileDropdownBox/ProfileDropdownBox';
import { Avatar } from '@material-ui/core';

const SidebarProfile = ({ user }) => {
    const [displayProfileDropBox, setDisplayProfileDropBox] = useState(false);
    const dialogRef = useOutsideAlerter(() => {
        setDisplayProfileDropBox(false);
    });

    return (
        <div
            className="sidebar_profile"
            onClick={() => setDisplayProfileDropBox(!displayProfileDropBox)}
            ref={dialogRef}
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
                displayProfileDropBox && (
                    <ProfileDropdownBox 
                        handleCloseProfileDropBox={() => setDisplayProfileDropBox(false)} 
                    />
                )
            }

        </div>
    )
}

export default SidebarProfile;
