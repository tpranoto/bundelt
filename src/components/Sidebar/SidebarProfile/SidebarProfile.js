import React from 'react';
import {Avatar} from '@material-ui/core'
import './SidebarProfile.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const SidebarProfile = ({user,setting,handleSettingOn,handleSettingOff}) => {

    return (
        <div className="sidebar_profile">
            {
                setting==="setting"?(
                    <ArrowBackIosIcon 
                        className="back_arrow" 
                        onClick={handleSettingOff}
                    />
                ):(
                    <></>
                )
            }

            <Avatar
                className="avatar"
                onClick={handleSettingOn}
                src={user.photo}
            />

            <div className="sidebar_profile_info">
                <h3>{user.displayName}</h3>
                <p>Location</p>
            </div>

        </div>
    )
}

export default SidebarProfile;
