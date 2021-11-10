import React from 'react';
import './Group.css';
import { useSelector } from 'react-redux';
import { selectGroupTabState } from '../../slices/appSlice';
import Sidebar from './Sidebar';
import GroupHome from './GroupHome';
import DiscoverGroup from './DiscoverGroup';
import GroupInfo from './GroupInfo';

const Group = () => {
    const groupTab= useSelector(selectGroupTabState);

    return (
        <div className="group">
            <Sidebar />

            {
                groupTab === "home"?(
                    <GroupHome />
                ):groupTab === "discover"?(
                    <DiscoverGroup />
                ):groupTab.startsWith("group_")?(
                    <GroupInfo />
                ):(
                    <div>Page Not Found</div>
                )
            }
        </div>
    )
}

export default Group;
