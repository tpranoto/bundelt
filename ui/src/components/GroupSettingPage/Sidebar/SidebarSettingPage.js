import React, { useState } from 'react';
import './SidebarSettingPage.css';
import GroupDeleteDialog from '../GroupDeleteDialog/GroupDeleteDialog';

const SidebarSettingPage = ({ groupId, groupName, handleClose }) => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

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

            <div 
                className="group_setting_page_sidebar_delete"
                onClick={() => setShowDeleteDialog(true)}
            >
                Delete Group
            </div>

            {
                showDeleteDialog && (
                    <GroupDeleteDialog
                        handleCloseDialog={() => setShowDeleteDialog(false)}
                        handleCloseSettingPage = {handleClose}
                        groupId={groupId}
                        groupName={groupName}
                    />
                )
            }

        </div>
    )
};

export default SidebarSettingPage;
