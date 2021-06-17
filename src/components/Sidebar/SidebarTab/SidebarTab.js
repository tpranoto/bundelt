import React, { useState } from 'react';
import SidebarGroupContent from './SidebarGroupContent/SidebarGroupContent.js';
import SidebarChatContent from './SidebarChatContent/SidebarChatContent.js';
import './SidebarTab.css';

const SidebarTab = () => {
    const [activeTabs, setActiveTabs] = useState("group");

    const handleGroups = () => {
        setActiveTabs("group");
    }

    const handleChats = () => {
        setActiveTabs("chat");
    }

    return (
        <>
            <div className="sidebar_tabs_frame">
                <div className="sidebar_tabs" role="tablist">
                    <div>
                        <h4 onClick={handleGroups}>Groups</h4>
                        <hr className={activeTabs === "group" ? "active_tab" : "inactive_tab"} />
                    </div>
                    <div>
                        <h4 onClick={handleChats}>Chats</h4>
                        <hr className={activeTabs === "chat" ? "active_tab" : "inactive_tab"} />
                    </div>
                </div>
            </div>
            {
                activeTabs === "group" ? (
                    <SidebarGroupContent />
                ) : (
                    <SidebarChatContent />
                )
            }
        </>
    )
}

export default SidebarTab;
