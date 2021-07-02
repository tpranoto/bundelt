import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';import ChannelList from './ChannelList/ChannelList.js';
import './SidebarGroup.css'
import GroupConfigBox from './GroupConfigBox/GroupConfigBox';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGroupName } from '../../../slices/groupSlice';
import { useOutsideAlerter } from '../../../utils/helper_func/helper.js';
import GroupSettingPage from '../../GroupSettingPage/GroupSettingPage.js';
import NewChannelDialog from './NewChannelDialog/NewChannelDialog.js';

const SidebarGroup = () => {
    const groupName = useSelector(selectGroupName);
    const [displaySettingBox, setDisplaySettingBox] = useState(false);
    const [displayGroupSetting, setDisplayGroupSetting] = useState(false);
    const [showCreateChannelDialog, setShowCreateChannelDialog] = useState(false);
    const settingRef = useOutsideAlerter(() => {
        setDisplaySettingBox(false);
    });

    const handleOpenGroupSetting= ()=>{
        setDisplayGroupSetting(true);
        setDisplaySettingBox(false);
    }

    const handleCloseChannelDialog = () => {
        setShowCreateChannelDialog(false);
    }

    const handleOpenChannelDialog = () => {
        setShowCreateChannelDialog(true);
    }

    return (
        <>
            <div 
                className="sidebar_header_container"
                ref={settingRef}
            >
                {
                    displaySettingBox && (
                        <GroupConfigBox 
                            openGroupSetting={handleOpenGroupSetting}
                            handleOpenChannelDialog={handleOpenChannelDialog}
                        />
                    )
                }

                <div
                    className="sidebar_group_header_container"
                    onClick={() => {
                        setDisplaySettingBox(!displaySettingBox);
                    }}
                >
                    <div className="sidebar_group_header_name">
                        <h4>{groupName}</h4>
                    </div>

                    <ExpandMoreIcon />
                </div>
            </div>

            <ChannelList />

            <NewChannelDialog
                handleCloseChannelDialog={handleCloseChannelDialog}
                handleCloseSetting={()=>setDisplaySettingBox(false)}
                show={showCreateChannelDialog}
            />
            
            {
                displayGroupSetting && (
                    <GroupSettingPage handleClose={()=>setDisplayGroupSetting(false)}/>
                )
            }
        </>
    )
};

export default SidebarGroup;
