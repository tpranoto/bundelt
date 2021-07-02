import React from 'react';
import './SidebarSettingPage.css';

const SidebarSettingPage = ({ groupName }) => {
    return (
        <div className="group_setting_page_sidebar">            
            <div className="group_setting_page_sidebar_name">
                <span>{groupName}</span>
            </div>

            <div className="group_setting_page_sidebar_overview">
                Overview
            </div>

            <div className="group_setting_page_sidebar_roles">
                Roles
            </div>

            <div className="group_setting_page_sidebar_moderations">
                Moderations
            </div>

            <div className="group_setting_page_sidebar_delete">
                Delete Group
            </div>

        </div>
    )
};

export default SidebarSettingPage;
