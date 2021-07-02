import React from 'react';
import './SidebarSettingPage.css';

const SidebarSettingPage = ({ channelName, handleClose }) => {
    return (
        <div className="channel_setting_page_sidebar">
            <div className="channel_setting_page_sidebar_name">
                <span>{channelName}</span>
            </div>

            <div className="channel_setting_page_sidebar_overview">
                Overview
            </div>

            <div className="channel_setting_page_sidebar_permissions">
                Permissions
            </div>

            <div className="channel_setting_page_sidebar_invites">
                Invites
            </div>

            <div className="channel_setting_page_sidebar_delete">
                Delete Channel
            </div>

        </div>
    )
};

export default SidebarSettingPage;
