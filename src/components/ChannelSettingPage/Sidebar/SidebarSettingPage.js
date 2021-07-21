import React, { useState } from 'react';
import './SidebarSettingPage.css';
import ChannelDeleteDialog from '../ChannelDeleteDialog/ChannelDeleteDialog';

const SidebarSettingPage = ({ groupId, channelId, channelName }) => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

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

            <div
                className="channel_setting_page_sidebar_delete"
                onClick={() => setShowDeleteDialog(true)}
            >
                Delete Channel
            </div>

            {
                showDeleteDialog && (
                    <ChannelDeleteDialog
                        handleCloseDialog={() => setShowDeleteDialog(false)}
                        groupId={groupId}
                        channelId={channelId}
                    />
                )
            }
        </div>
    )
};

export default SidebarSettingPage;
