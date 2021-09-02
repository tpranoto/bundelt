import React from 'react';
import { useSelector } from 'react-redux';
import './GroupSettingPage.css';
import SidebarSettingPage from './Sidebar/SidebarSettingPage';
import { selectGroupId, selectGroupName } from '../../slices/groupSlice';
import { useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const GroupSettingPage = ({ handleClose }) => {
  const groupId = useSelector(selectGroupId);
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
  }, [handleClose]);

  return (
    <div className="group_setting_page">
      <div className="group_setting_page_empty">
        <div
          className="group_setting_page_sidebar_close"
          onClick={handleClose}
        >
          <ArrowBackIcon />
        </div>
      </div>

      <SidebarSettingPage
        groupId={groupId}
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
