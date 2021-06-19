import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import db from '../../../../firebase';
import GroupList from './GroupList/GroupList.js';
import './SidebarGroupContent.css'
import GroupSettingBox from './GroupSettingBox/GroupSettingBox';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const SidebarGroupContent = () => {
    const [displaySettingBox, setDisplaySettingBox] = useState(false);
    const settingRef = useOutsideAlerter(() => {
        setDisplaySettingBox(false);
    });

    const handleAddGroups = () => {
        const groupName = prompt("Enter group name");

        if (groupName) {
            db.collection('groups').add({
                groupName: groupName,
            });
        }
    };

    return (
        <>
            <div className="group_search_container">
                <div className="group_search">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
            </div>

            <GroupList />

            <div className="footer_container">
                <GroupSettingBox
                    showSetting={displaySettingBox}
                    settingRef={settingRef}
                />

                <div
                    className="group_footer_container"
                    onClick={() => {
                        setDisplaySettingBox(!displaySettingBox);
                    }}
                    ref={settingRef}
                >
                    <div className="group_footer">
                        <h4>Groups</h4>
                    </div>

                    <ExpandLessIcon />

                    {/* <div>
                        <AddIcon
                            onClick={handleAddGroups}
                            className="group_footer_add"
                        />
                    </div> */}
                </div>
            </div>
        </>
    )
};

const useOutsideAlerter = (handler) => {
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return ref
}

export default SidebarGroupContent;
