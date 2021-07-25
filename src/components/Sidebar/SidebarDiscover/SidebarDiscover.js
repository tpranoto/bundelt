import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SidebarDiscover.css';
import { setDiscoverTabState } from '../../../slices/appSlice';

const SidebarDiscover = () => {
    const dispatch = useDispatch();
    const [discoverTab, setDiscoverTab] = useState("home");

    const handleHomeTab = () => {
        setDiscoverTab("home");
        dispatch(
            setDiscoverTabState({
                discoverTabState: "home",
            })
        );
    };

    const handleMarketTab = () => {
        setDiscoverTab("market");
        dispatch(
            setDiscoverTabState({
                discoverTabState: "market",
            })
        );
    };

    const handleStudyTab = () => {
        setDiscoverTab("study");
        dispatch(
            setDiscoverTabState({
                discoverTabState: "study",
            })
        );
    };

    const handleEntertainmentTab = () => {
        setDiscoverTab("entertainment");
        dispatch(
            setDiscoverTabState({
                discoverTabState: "entertainment",
            })
        );
    };

    return (
        <div className="sidebar_discover">
            <div className="sidebar_discover_header">
                <h4>Discover</h4>
            </div>

            <div
                className={discoverTab === "home" ? "selected_discover_tab" : "discover_tab"}
                onClick={handleHomeTab}
            >
                Home
            </div>

            <div
                className={discoverTab === "market" ? "selected_discover_tab" : "discover_tab"}
                onClick={handleMarketTab}
            >
                Market
            </div>

            <div
                className={discoverTab === "study" ? "selected_discover_tab" : "discover_tab"}
                onClick={handleStudyTab}
            >
                Study Center
            </div>

            <div
                className={discoverTab === "entertainment" ? "selected_discover_tab" : "discover_tab"}
                onClick={handleEntertainmentTab}
            >
                Entertainment
            </div>
        </div>
    );
};

export default SidebarDiscover;
