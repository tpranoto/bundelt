import React from 'react';
import { useSelector } from 'react-redux';
import './AboutGroupTab.css';
import { selectGroupDesc, selectGroupName, selectGroupTimestamp } from '../../../../../slices/groupSlice';
import cat from '../../../../../assets/cat.jpeg';

const AboutGroupTab = () => {
    const groupName = useSelector(selectGroupName);
    const groupDesc = useSelector(selectGroupDesc);
    const groupTime = useSelector(selectGroupTimestamp);

    return (
        <div className="group_detail_about_group_tab">
            <div className="group_detail_name">
                <h3># {groupName} </h3>
            </div>

            <div className="group_detail_img">
                <img src={cat} alt="" />
            </div>

            <div className="group_detail_create_at">
                <h5>Created At</h5>
                <span>{groupTime}</span>
            </div>

            <div className="group_detail_desc">
                <h5>Description</h5>
                <span>{groupDesc}</span>

            </div>
        </div>
    )
};

export default AboutGroupTab;
