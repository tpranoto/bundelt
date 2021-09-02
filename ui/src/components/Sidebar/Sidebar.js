import React from 'react';
import { useSelector } from 'react-redux';
import './Sidebar.css';
import SidebarProfile from './SidebarProfile/SidebarProfile';
import SidebarHome from './SidebarHome/SidebarHome';
import SidebarDiscover from './SidebarDiscover/SidebarDiscover';
import SidebarGroup from './SidebarGroup/SidebarGroup';
import { selectUser } from '../../slices/userSlice';

const Sidebar = () => {
    const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            <SidebarProfile
                user={user}
            />

            <div className="sidebar_inside">
                <SidebarHome />
                <SidebarDiscover />
                <SidebarGroup />
            </div>

        </div>
    );
}

export default Sidebar;
