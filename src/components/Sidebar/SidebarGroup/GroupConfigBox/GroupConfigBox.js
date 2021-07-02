import React from 'react';
import './GroupConfigBox.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PolicyIcon from '@material-ui/icons/Policy';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const GroupConfigBox = ({ openGroupSetting, handleOpenChannelDialog }) => {
    return (
        <div
            className="group_settings"
        >
            <div className="setting_box_container">
                <div
                    className="invite_box"
                >
                    <span>Invite</span>
                    <PersonAddIcon />
                </div>

                <div
                    className="group_setting_box"
                    onClick={openGroupSetting}
                >
                    <span>Group Settings</span>
                    <SettingsIcon />
                </div>

                <div
                    className="create_channel_box"
                    onClick={handleOpenChannelDialog}
                >
                    <span>Create Channel</span>
                    <AddCircleIcon />
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
