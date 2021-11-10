import React from 'react';
import './GroupContainer.css';
import defbg from './../../assets/groupdefbg.jpg';

const GroupContainer = () => {
    return (
        <div className="group_details_container">
            <div className="group_details_img">
                <img src={defbg} alt="" />
            </div>

            <h4 className="group_details_title">Name</h4>

            <p className="group_details_desc">This is the description of the group</p>

            <div className="group_details_tags">
                <GroupTag tag="cycling" />
                <GroupTag tag="test" />
            </div>

            <span className="group_details_member_count">1000 members • 10 km away</span>

            <div
                className="group_details_footer_join"
            >
                Join
            </div>

        </div>
    )
}

export default GroupContainer;

const GroupTag = ({ tag }) => {
    return (
        <div className="discover_group_tag">
            {tag}
        </div>
    )
}
