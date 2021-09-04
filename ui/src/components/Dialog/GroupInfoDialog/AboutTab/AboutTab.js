import React from 'react';
import { useSelector } from 'react-redux';
import './AboutTab.css';
import { selectGroupName, selectGroupDesc, selectGroupTimestamp } from '../../../../slices/groupSlice';

const AboutTab = () => {
    const groupName = useSelector(selectGroupName);
    const groupDesc = useSelector(selectGroupDesc);
    const groupTime = useSelector(selectGroupTimestamp);

    return (
        <div className="group_info_dialog_about_tab">

            <div className="group_info_dialog_about_tab_name">
                <span className="group_info_dialog_about_tab_title">Name</span>
                <span>{groupName}</span>
            </div>

            <div className="group_info_dialog_about_tab_desc">
                <span className="group_info_dialog_about_tab_title">Description</span>
                <span>{groupDesc}</span>

            </div>

            <div className="group_info_dialog_about_tab_time">
                <span className="group_info_dialog_about_tab_title">Created At</span>
                <span>{groupTime}</span>
            </div>
        </div>
    )
}

export default AboutTab;
