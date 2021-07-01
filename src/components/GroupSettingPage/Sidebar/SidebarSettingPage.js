import React from 'react';
import './SidebarSettingPage.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const SidebarSettingPage = ({ groupName, handleClose }) => {
    return (
        <div className="group_setting_page_sidebar">
            <div className="group_setting_page_sidebar_name">
                <div
                    className="group_setting_page_sidebar_close"
                    onClick={handleClose}
                >
                    <ArrowBackIcon />
                </div>
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
