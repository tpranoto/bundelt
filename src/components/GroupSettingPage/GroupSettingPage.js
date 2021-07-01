import React from 'react';
import { useSelector } from 'react-redux';
import './GroupSettingPage.css';
import SidebarSettingPage from './Sidebar/SidebarSettingPage';
import { selectGroupName } from '../../slices/groupSlice';
import { useEffect } from 'react';

const GroupSettingPage = ({handleClose}) => {
    const groupName = useSelector(selectGroupName);
    
    useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27) {
            handleClose();
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      },[handleClose]);

    return (
        <div className="group_setting_page">
            <SidebarSettingPage 
                groupName={groupName}
                handleClose={handleClose}
            />

            <div className="group_setting_page_main">
                main
            </div>
        </div>
    )
}

export default GroupSettingPage;
