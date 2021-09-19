import React, { useState } from 'react';
import './HeaderProfile.css';
import { useOutsideAlerter } from '../../../utils/helper/helper.js';
import ProfileDropdownBox from '../../DropdownBox/ProfileDropdownBox/ProfileDropdownBox';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar } from '@material-ui/core';

const HeaderProfile = ({ user }) => {
    const [displayProfileDropBox, setDisplayProfileDropBox] = useState(false);
    const dialogRef = useOutsideAlerter(() => {
        setDisplayProfileDropBox(false);
    });

    return (
        <div
            className="header_profile"
        >
            <MoreVertIcon 
                id="header_notification"
            />
            
            <NotificationsActiveIcon 
                id="header_notification"
            />
            
            <Avatar
                id="header_avatar_profile"
                onClick={() => setDisplayProfileDropBox(!displayProfileDropBox)}
            >
                {user.initials}
            </Avatar>

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

export default HeaderProfile;
