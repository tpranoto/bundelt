import React from 'react';
import './Sidebar.css';
import SidebarHome from './SidebarHome/SidebarHome';
import SidebarDiscover from './SidebarDiscover/SidebarDiscover';
import SidebarGroup from './SidebarGroup/SidebarGroup';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_inside">
                <SidebarHome />
                <SidebarDiscover />
                <SidebarGroup />
            </div>

        </div>
    );
}

export default Sidebar;
