import React from 'react';
import './GroupSettingBox.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const GroupSettingBox = ({showSetting,settingRef}) => {
    return (
        <div 
            className="group_settings" 
            style={{display: showSetting ? '' : 'none' }}
            ref={settingRef}
        >
            <div className="setting_box_container">
                <div className="notification_box">
                    <span>Notification Settings</span>
                    <NotificationsIcon />
                </div>

                <div className="privacy_box">
                    <span>Privacy Settings</span>
                    <SettingsIcon />
                </div>

                <div id="leave_group_box">
                    <span id="leave_name">Leave Group</span>
                    <ExitToAppIcon id="leave_icon" />
                </div>
            </div>
        </div>
    )
}

export default GroupSettingBox;
