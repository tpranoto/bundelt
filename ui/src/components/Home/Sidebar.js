import React from 'react';
import './Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMainTabState, selectMainTabState, setGroupTabState, setEventTabState } from '../../slices/appSlice';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import EventIcon from '@material-ui/icons/Event';
import { Avatar } from '@material-ui/core';
import { selectUser } from '../../slices/userSlice';

const Sidebar = () => {
    const user = useSelector(selectUser);

    return (
        <div className="sidebar_home">
            <div className="sidebar_home_inside">
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
                    tabName="group"
                    tabTitle="Groups"
                />

                <SidebarTab
                    tabName="event"
                    tabTitle="Events"
                />
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

    const handleGroupTab = () => {
        dispatch(
            setMainTabState({
                mainTabState: tabName,
            })
        );

        dispatch(
            setGroupTabState({
                groupTabState: "home",
            })
        );
    }

    const handleEventTab = () => {
        dispatch(
            setMainTabState({
                mainTabState: tabName,
            })
        );

        dispatch(
            setEventTabState({
                eventTabState: "home",
            })
        );
    }

    return (
        <div className="home_tab_cont">
            <div
                className={mainTab === tabName ? "home_tab_selected" : "home_tab_def"}
                onClick={tabName === "group" ? handleGroupTab : tabName === "event" ? handleEventTab : handleTab}
            >
                {
                    tabName === "user" ? (
                        <Avatar id="home_tab_profile">{tabUserInitial}</ Avatar>
                    ) : tabName === "home" ? (
                        <HomeIcon className="home_tab_icon" />
                    ) : tabName === "group" ? (
                        <GroupIcon className="home_tab_icon" />
                    ) : (
                        <EventIcon className="home_tab_icon" />
                    )
                }

                <div className="home_tab_title_container">
                    <span className="home_tab_title">{tabTitle}</span>
                </div>
            </div>

        </div >
    )
}
