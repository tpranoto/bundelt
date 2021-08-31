import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SidebarHome.css';
import { setSidebarTabState, selectSidebarTabState } from '../../../slices/appSlice';
import HomeIcon from '@material-ui/icons/Home';

const SidebarHome = () => {
    const dispatch = useDispatch();
    const sidebarTab = useSelector(selectSidebarTabState);

    const handleHomeTab = () => {
        dispatch(
            setSidebarTabState({
                sidebarTabState: "home",
            })
        );
    };

    return (
        <div className="sidebar_home_div">
            <div
                className={sidebarTab === "home" ? "sidebar_home_selected" : "sidebar_home"}
                onClick={handleHomeTab}
            >
                <HomeIcon className="sidebar_home_icon" />

                <div className="sidebar_home_title_container">
                    <span className="sidebar_home_title">Home</span>
                </div>
            </div>

        </div >
    )
}

export default SidebarHome;
