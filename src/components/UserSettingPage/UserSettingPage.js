import React from 'react';
import { useSelector } from 'react-redux';
import './UserSettingPage.css';
import SidebarSettingPage from './Sidebar/SidebarSettingPage';
import { selectUser } from '../../slices/userSlice';
import { useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const UserSettingPage = ({ handleClose }) => {
  const user = useSelector(selectUser);

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
    <div className="user_setting_page">
      <div className="user_setting_page_empty">
        <div
          className="user_setting_page_sidebar_close"
          onClick={handleClose}
        >
          <ArrowBackIcon />
        </div>
      </div>

      <SidebarSettingPage
        userName={user.displayName}
        handleClose={handleClose}
      />

      <div className="user_setting_page_main">
        main
      </div>
    </div>
  )
}

export default UserSettingPage;
