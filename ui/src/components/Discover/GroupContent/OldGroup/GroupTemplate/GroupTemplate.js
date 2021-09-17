import React from 'react';
import './GroupTemplate.css';
import cat from '../../../../../assets/cat.jpeg';

const GroupTemplate = ({ groupName, groupDesc, groupDistance, groupMembers }) => {
    return (
        <div className="group_template_container">
            <div className="group_template_content">
                <div
                    className="group_template_content_pic"
                >
                    <img src={cat} alt="" />
                </div>

                <div className="group_template_content_desc">
                    <h4>{groupName}</h4>
                    <p>{groupDesc}</p>

                    <h6>{groupMembers} members - {groupDistance} km away</h6>
                </div>
            </div>
        </ div>
    )
};

export default GroupTemplate;
