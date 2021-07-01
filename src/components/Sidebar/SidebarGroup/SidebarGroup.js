import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ChannelList from './ChannelList/ChannelList.js';
import './SidebarGroup.css'
import GroupConfigBox from './GroupConfigBox/GroupConfigBox';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGroupName } from '../../../slices/groupSlice';
import { useOutsideAlerter } from '../../../utils/helper_func/helper.js';
import GroupSettingPage from '../../GroupSettingPage/GroupSettingPage.js';

const SidebarGroup = () => {
    const groupName = useSelector(selectGroupName);
    const [displaySettingBox, setDisplaySettingBox] = useState(false);
    const [displayGroupSetting, setDisplayGroupSetting] = useState(false);
    const settingRef = useOutsideAlerter(() => {
        setDisplaySettingBox(false);
    });

    const handleOpenGroupSetting= ()=>{
        setDisplayGroupSetting(true);
        setDisplaySettingBox(false);
    }

    return (
        <>
            <ChannelList />

            <div 
                className="footer_container"
                ref={settingRef}
            >
                {
                    displaySettingBox && (
                        <GroupConfigBox openGroupSetting={handleOpenGroupSetting}/>
                    )
                }

                <div
                    className="group_footer_container"
                    onClick={() => {
                        setDisplaySettingBox(!displaySettingBox);
                    }}
                >
                    <div className="group_footer">
                        <h4>{groupName}</h4>
                    </div>

                    <ExpandLessIcon />
                </div>
            </div>
            
            {
                displayGroupSetting && (
                    <GroupSettingPage handleClose={()=>setDisplayGroupSetting(false)}/>
                )
            }
        </>
    )
};

export default SidebarGroup;
