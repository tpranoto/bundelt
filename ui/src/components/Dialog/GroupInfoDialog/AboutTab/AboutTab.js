import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AboutTab.css';
import db from '../../../../utils/firebase/firebase';
import { useOutsideAlerter } from '../../../../utils/helper/helper.js';
import firebase from 'firebase';
import { selectGroupName, selectGroupDesc, selectGroupTimestamp } from '../../../../slices/groupSlice';
import { setSidebarTabState } from '../../../../slices/appSlice';
import { selectUser } from '../../../../slices/userSlice';
import CloseIcon from '@material-ui/icons/Close';

const AboutTab = ({ handleCloseGroupDialog }) => {
    const dispatch = useDispatch();
    const groupName = useSelector(selectGroupName);
    const groupDesc = useSelector(selectGroupDesc);
    const groupTime = useSelector(selectGroupTimestamp);

    const dialogRef = useOutsideAlerter(() => {
        handleCloseGroupDialog();
    });

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
