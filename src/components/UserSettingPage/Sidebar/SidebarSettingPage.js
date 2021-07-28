import React from 'react';
import './SidebarSettingPage.css';
import logo from '../../../assets/logo192.png';
import { auth } from '../../../utils/firebase/firebase';

const SidebarSettingPage = ({ userName }) => {
    return (
        <div className="user_setting_page_sidebar">            
            <div className="user_setting_page_sidebar_name">
                <span>{userName}</span>
            </div>

            <div className="user_setting_page_sidebar_overview">
                Overview
            </div>

            <div className="user_setting_page_sidebar_roles">
                Roles
            </div>

            <div className="user_setting_page_sidebar_moderations">
                Moderations
            </div>

            <div 
                className="user_setting_page_sidebar_logout"
                onClick={() => auth.signOut()}
            >
                Logout
            </div>

            <div className="user_setting_page_sidebar_info">
                    <img
                        src={logo}
                        alt=""
                    />
                <p>Version 1.0</p>
            </div>

        </div>
    )
};

export default SidebarSettingPage;
