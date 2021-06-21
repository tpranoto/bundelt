import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ChannelList from './ChannelList/ChannelList.js';
import './SidebarGroup.css'
import GroupSettingBox from './GroupSettingBox/GroupSettingBox';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectGroupName } from '../../../slices/groupSlice';

const SidebarGroup = () => {
    const groupName = useSelector(selectGroupName);
    const [displaySettingBox, setDisplaySettingBox] = useState(false);
    const settingRef = useOutsideAlerter(() => {
        setDisplaySettingBox(false);
    });

    return (
        <>
            {/* <div className="group_search_container">
                <div className="group_search">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
            </div> */}

            <ChannelList />

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
                        <h4>{groupName}</h4>
                    </div>

                    <ExpandLessIcon />
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

export default SidebarGroup;
