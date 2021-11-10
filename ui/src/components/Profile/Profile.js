import { Avatar } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import defbg from '../../assets/longgroupbg.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';

const Profile = () => {
    const user = useSelector(selectUser);
    return (
        <div className="profile_page">
            <div className="profile_page_inside">
                <div className="profile_header">
                    <div className="profile_header_banner">
                        <img className="profile_header_cover_pic" src={defbg} alt="" />

                        <Avatar id="profile_header_avatar_pic">{user.initials}</Avatar>
                    </div>

                    <h1 className="profile_header_name">{user.displayName}</h1>
                </div>

                <div className="profile_content_page">
                    <div className="profile_content_info">
                        all info
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
