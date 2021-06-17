import React,{useState} from 'react';
import './Sidebar.css';
import SidebarProfile from './SidebarProfile/SidebarProfile.js';
import SidebarTab from './SidebarTab/SidebarTab.js';
import SidebarSetting from './SidebarSetting/SidebarSetting.js';
import { selectUser } from '../../slices/userSlice';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const user = useSelector(selectUser);
    const [setting, setSetting] = useState("");

    const handleSettingOn = () => {
        setSetting("setting");
    };

    const handleSettingOff = () => {
        setSetting("");
    };

    return (
        <div className="sidebar">
            <SidebarProfile 
                user={user} 
                setting={setting} 
                handleSettingOn={handleSettingOn} 
                handleSettingOff={handleSettingOff}
            />

            {
                setting==="setting"?(
                    <SidebarSetting />
                ):(
                    <SidebarTab />
                )
            }
        </div>
    );
}

export default Sidebar;
