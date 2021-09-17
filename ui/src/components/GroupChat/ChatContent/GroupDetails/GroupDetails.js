import React, { useState } from 'react';
import AboutGroupTab from './AboutGroupTab/AboutGroupTab';
import MemberListTab from './MemberListTab/MemberListTab';
import './GroupDetails.css';
import SettingsTab from './SettingsTab/SettingsTab';
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';

const GroupDetails = () => {
    const [tabState, setTabState] = useState("about");

    return (
        <div className="group_detail_container">
            <div className="group_detail_tabs">
                <div
                    className={tabState === "about" ? "group_detail_tab selected_group_detail_tab" : "group_detail_tab"}
                    onClick={() => setTabState("about")}
                >
                    <InfoIcon />
                </div>

                <div
                    className={tabState === "members" ? "group_detail_tab selected_group_detail_tab" : "group_detail_tab"}
                    onClick={() => setTabState("members")}
                >
                    <GroupIcon />
                </div>

                <div
                    className={tabState === "settings" ? "group_detail_tab selected_group_detail_tab" : "group_detail_tab"}
                    onClick={() => setTabState("settings")}
                >
                    <SettingsIcon />
                </div>
            </div>

            {
                tabState === "about" ? (
                    <AboutGroupTab />
                ) : tabState === "members" ? (
                    <MemberListTab />
                ) : (
                    <SettingsTab />
                )
            }

        </div>
    )
}

export default GroupDetails;
