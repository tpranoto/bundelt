import React from 'react';
import './Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMainTabState, selectMainTabState } from '../../slices/appSlice';
import SidebarGroup from './SidebarGroup/SidebarGroup';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import GroupIcon from '@material-ui/icons/Group';
import EventIcon from '@material-ui/icons/Event';
import { Avatar } from '@material-ui/core';
import { selectUser } from '../../slices/userSlice';

const Sidebar = () => {
    const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            <div className="sidebar_inside">
                <SidebarTab
                    tabName="user"
                    tabTitle={user.displayName}
                    tabUserInitial={user.initials}
                />

                <SidebarTab
                    tabName="home"
                    tabTitle="Home"
                />

                <SidebarTab
                    tabName="discover"
                    tabTitle="Discover"
                />

                <SidebarTab
                    tabName="group"
                    tabTitle="Groups"
                />
                <SidebarTab
                    tabName="event"
                    tabTitle="Events"
                />

                <SidebarGroup />
            </div>

        </div>
    );
}

export default Sidebar;

const SidebarTab = ({ tabName, tabTitle, tabUserInitial }) => {
    const dispatch = useDispatch();
    const mainTab = useSelector(selectMainTabState);

    const handleTab = () => {
        dispatch(
            setMainTabState({
                mainTabState: tabName,
            })
        );
    };

    return (
        <div className="tab_cont">
            <div
                className={mainTab === tabName ? "tab_selected" : "tab_def"}
                onClick={handleTab}
            >
                {
                    tabName === "user" ? (
                        <Avatar id="tab_profile">{tabUserInitial}</ Avatar>
                    ) : tabName === "home" ? (
                        <HomeIcon className="tab_icon" />
                    ) : tabName === "discover" ? (
                        <ExploreIcon className="tab_icon" />
                    ) : tabName === "group" ? (
                        <GroupIcon className="tab_icon" />
                    ) : (
                        <EventIcon className="tab_icon" />
                    )
                }

                <div className="tab_title_container">
                    <span className="tab_title">{tabTitle}</span>
                </div>
            </div>

        </div >
    )
}
