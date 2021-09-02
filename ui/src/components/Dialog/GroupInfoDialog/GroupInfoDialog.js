import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GroupInfoDialog.css';
import db from '../../../utils/firebase/firebase';
import { useOutsideAlerter } from '../../../utils/helper/helper.js';
import firebase from 'firebase';
import { setGroupInfo, selectGroupName } from '../../../slices/groupSlice';
import { setSidebarTabState } from '../../../slices/appSlice';
import { selectUser } from '../../../slices/userSlice';
import CloseIcon from '@material-ui/icons/Close';
import AboutTab from './AboutTab/AboutTab';

const GroupInfoDialog = ({ handleCloseGroupDialog }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const groupName = useSelector(selectGroupName);
    const [tabState, setTabState] = useState("about");

    const dialogRef = useOutsideAlerter(() => {
        handleCloseGroupDialog();
    });

    const handleAboutTab = () => {
        setTabState("about");
    };

    const handleMembersTab = () => {
        setTabState("members");
    };

    const handleSettingsTab = () => {
        setTabState("settings");
    };

    return (
        <div className="bg_dialog">
            <div
                className="group_info_dialog_main"
                ref={dialogRef}
            >
                <div className="group_info_dialog_header">
                    <h2># {groupName}</h2>

                    <div
                        className="close_dialog_icon"
                        onClick={handleCloseGroupDialog}
                    >
                        <CloseIcon />
                    </div>
                </div>

                <div className="group_info_dialog_content">
                    <div className="group_info_dialog_tabs">
                        <div
                            className={tabState === "about" ? "group_info_dialog_tab1 selected_group_info_dialog_tab" : "group_info_dialog_tab1"}
                            onClick={handleAboutTab}
                        >
                            <span className={tabState === "about" ? "selected_group_info_dialog_tab_name" : "group_info_dialog_tab_name"}>
                                About
                            </span>
                        </div>

                        <div
                            className={tabState === "members" ? "group_info_dialog_tab2 selected_group_info_dialog_tab" : "group_info_dialog_tab2"}
                            onClick={handleMembersTab}
                        >
                            <span className={tabState === "members" ? "selected_group_info_dialog_tab_name" : "group_info_dialog_tab_name"}>
                                Members
                            </span>
                        </div>

                        <div
                            className={tabState === "settings" ? "group_info_dialog_tab3 selected_group_info_dialog_tab" : "group_info_dialog_tab3"}
                            onClick={handleSettingsTab}
                        >
                            <span className={tabState === "settings" ? "selected_group_info_dialog_tab_name" : "group_info_dialog_tab_name"}>
                                Settings
                            </span>
                        </div>
                    </div>

                    <AboutTab />
                </div>
            </div>

        </div>
    )
}

export default GroupInfoDialog;
