import React from 'react';
import './SettingsTab.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ReportIcon from '@material-ui/icons/Report';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ShareIcon from '@material-ui/icons/Share';

const SettingsTab = () => {
    return (
        <div className="settings_tab_content">
            <div className="settings_tab_share">
                <ShareIcon />
                <h5>Share</h5>
            </div>

            <div className="settings_tab_notification">
                <NotificationsActiveIcon />
                <h5>Manage Notification</h5>
            </div>

            <div className="settings_tab_report">
                <ReportIcon />
                <h5>Report Group</h5>
            </div>

            <div className="settings_tab_leave">
                <ExitToAppIcon />
                <h5>Leave Group</h5>
            </div>
        </div>
    )
}

export default SettingsTab;
