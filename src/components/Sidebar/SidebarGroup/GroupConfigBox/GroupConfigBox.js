import React from 'react';
import './GroupConfigBox.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PolicyIcon from '@material-ui/icons/Policy';

const GroupConfigBox = ({ openGroupSetting }) => {
    return (
        <div
            className="group_settings"
        >
            <div className="setting_box_container">
                <div
                    className="group_seting_box"
                    onClick={openGroupSetting}
                >
                    <span>Group Settings</span>
                    <SettingsIcon />
                </div>

                <div className="notification_box">
                    <span>Notification Settings</span>
                    <NotificationsIcon />
                </div>

                <div className="privacy_box">
                    <span>Privacy Settings</span>
                    <PolicyIcon />
                </div>

                <div id="leave_group_box">
                    <span id="leave_name">Leave Group</span>
                    <ExitToAppIcon id="leave_icon" />
                </div>
            </div>
        </div>
    )
}

export default GroupConfigBox;
