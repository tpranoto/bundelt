import React, { useState } from 'react';
import './HeaderProfile.css';
import { useOutsideAlerter } from '../../../utils/helper/helper.js';
import ProfileDropdownBox from '../../DropdownBox/ProfileDropdownBox/ProfileDropdownBox';
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
            <Avatar
                id="header_avatar_profile"
                onClick={() => setDisplayProfileDropBox(!displayProfileDropBox)}
                ref={dialogRef}
            >
                {user.initials}
            </Avatar>

            {
                displayProfileDropBox && (
                    <ProfileDropdownBox
                        user={user}
                        handleCloseProfileDropBox={() => setDisplayProfileDropBox(false)}
                    />
                )
            }

        </div>
    )
}

export default HeaderProfile;
