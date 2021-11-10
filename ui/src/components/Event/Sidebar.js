import React from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import EventIcon from '@material-ui/icons/Event';
import ExploreIcon from '@material-ui/icons/Explore';
import { useDispatch, useSelector } from 'react-redux';
import { selectEventTabState, setEventTabState } from '../../slices/appSlice';

const Sidebar = () => {
    return (
        <div className="sidebar_event">
            <h2 className="sidebar_event_title">Events</h2>

            <div className="sidebar_event_search">
                <input placeholder="Search events" />
                <SearchIcon />
            </div>

            <div className="sidebar_event_inside">
                <SidebarTab
                    tabName="home"
                    tabTitle="Home"
                />

                <SidebarTab
                    tabName="discover"
                    tabTitle="Discover"
                />

                <div
                    className="sidebar_event_create_button"
                    // onClick={() => setOpenNewGroupDialog(true)}
                >
                    + Create New Event
                </div>

                <hr className="sidebar_event_hr_divider" />
            </div>
        </div>
    )
}

export default Sidebar;

const SidebarTab = ({ tabName, tabTitle }) => {
    const dispatch = useDispatch();
    const eventTab = useSelector(selectEventTabState);

    const handleTab = () => {
        dispatch(
            setEventTabState({
                eventTabState: tabName,
            })
        );
    };

    return (
        <div className="event_tab_cont">
            <div
                className={eventTab === tabName ? "event_tab_selected" : "event_tab_def"}
                onClick={handleTab}
            >
                {
                    tabName === "home" ? (
                        <EventIcon className="event_tab_icon" />
                    ) : (
                        <ExploreIcon className="event_tab_icon" />
                    )
                }

                <div className="event_tab_title_container">
                    <span className="event_tab_title">{tabTitle}</span>
                </div>
            </div>

        </div >
    )
}
