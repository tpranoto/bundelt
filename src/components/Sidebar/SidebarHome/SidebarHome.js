import React from 'react';
import { useDispatch } from 'react-redux';
import './SidebarHome.css';
import { setHomeTabState } from '../../../slices/appSlice.js';
import { useState } from 'react';

const SidebarHome = () => {
    const dispatch = useDispatch();
    const [homeTab,setHomeTab] = useState("friends");

    dispatch(
        setHomeTabState({
            homeTabState: homeTab,
        })
    );

    const handleFriendsTab = () =>{
        setHomeTab("friends");
        dispatch(
            setHomeTabState({
                homeTabState: "friends",
            })
        );
    };

    const handleDiscoveryTab = () =>{
        setHomeTab("discovery");
        dispatch(
            setHomeTabState({
                homeTabState: "discovery",
            })
        );
    };

    const handleNewsTab = () =>{
        setHomeTab("news");
        dispatch(
            setHomeTabState({
                homeTabState: "news",
            })
        );
    };


    return (
        <div className="sidebar_home">
            <div className="sidebar_header_home">
                <h4>Home</h4>
            </div>

            <div 
                className={homeTab==="friends"?"selected_home_tab":"home_tab"}
                onClick={handleFriendsTab}
            >
                Friends
            </div>

            <div 
                className={homeTab==="discovery"?"selected_home_tab":"home_tab"}
                onClick={handleDiscoveryTab}
            >
                Discovery
            </div>

            <div 
                className={homeTab==="news"?"selected_home_tab":"home_tab"}
                onClick={handleNewsTab}
            >
                News
            </div>

            <div className="sidebar_home_divider" />

        </div>
    )
}

export default SidebarHome;
