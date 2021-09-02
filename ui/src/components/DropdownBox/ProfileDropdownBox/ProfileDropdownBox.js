import React from 'react';
import './ProfileDropdownBox.css';
import { auth } from '../../../utils/firebase/firebase';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';

const ProfileDropdownBox = () => {

    return (
        <div className="profile_dropdown_box_bg">
            <div className="profile_dropdown_box">
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
                    onClick={() => auth.signOut()}
                >
                    <span id="profile_dropdown_logout_title">Logout</span>
                    <ExitToAppIcon id="logout_icon" />
                </div>
            </div>
        </div>
    )
}

export default ProfileDropdownBox;
