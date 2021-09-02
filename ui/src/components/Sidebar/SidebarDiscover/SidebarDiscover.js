import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SidebarDiscover.css';
import { setSidebarTabState, selectSidebarTabState } from '../../../slices/appSlice';
import ExploreIcon from '@material-ui/icons/Explore';

const SidebarDiscover = () => {
    const dispatch = useDispatch();
    const sidebarTab = useSelector(selectSidebarTabState);

    const handleDiscoverTab = () => {
        dispatch(
            setSidebarTabState({
                sidebarTabState: "discover",
            })
        );
    };

    return (
        <div className="sidebar_discover_div">
            <div
                className={sidebarTab === "discover" ? "sidebar_discover_selected" : "sidebar_discover"}
                onClick={handleDiscoverTab}
            >
                <ExploreIcon className="sidebar_discover_icon" />

                <div className="sidebar_discover_title_container">
                    <span className="sidebar_discover_title">Discover</span>
                </div>
            </div>

        </div>
    );
};

export default SidebarDiscover;
