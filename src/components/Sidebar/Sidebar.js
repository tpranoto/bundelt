import React, { useState } from 'react';
import './Sidebar.css';
import SidebarProfile from './SidebarProfile/SidebarProfile.js';
import SidebarGroup from './SidebarGroup/SidebarGroup.js';
import SidebarHome from './SidebarHome/SidebarHome.js';
import SidebarFind from './SidebarFind/SidebarFind.js';
import GroupBar from './GroupBar/GroupBar.js';
import SidebarSetting from './SidebarSetting/SidebarSetting.js';
import { selectUser } from '../../slices/userSlice';
import { selectGroupState } from '../../slices/appSlice';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const user = useSelector(selectUser);
    const gState = useSelector(selectGroupState);
    const [sidebarContent, setSidebarContent] = useState("");

    return (
        <div className="sidebar">
            <SidebarProfile
                user={user}
                setting={sidebarContent}
                handleSettingOn={() => {
                    setSidebarContent("setting");
                }}
                handleSettingOff={() => {
                    setSidebarContent("");
                }}
            />

            {
                sidebarContent === "setting" ? (
                    <SidebarSetting />
                ) : (
                    <>
                        <GroupBar />
                        {
                            gState === "home" ? (
                                <SidebarHome />
                            ) : gState === "find" ? (
                                <SidebarFind />
                            ) : (
                                <SidebarGroup />
                            )
                        }
                    </>
                )
            }
        </div>
    );
}

export default Sidebar;
