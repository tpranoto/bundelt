import React from 'react';
import { useSelector } from 'react-redux';
import './ChannelSettingPage.css';
import SidebarSettingPage from './Sidebar/SidebarSettingPage';
import { selectChannelName } from '../../slices/channelSlice';
import { useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ChannelSettingPage = ({ handleClose }) => {
  const channelName = useSelector(selectChannelName);

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
  });

  return (
    <div className="channel_setting_page">
      <div className="channel_setting_page_empty">
        <div
          className="channel_setting_page_sidebar_close"
          onClick={handleClose}
        >
          <ArrowBackIcon />
        </div>
      </div>


      <SidebarSettingPage
        channelName={channelName}
        handleClose={handleClose}
      />

      <div className="channel_setting_page_main">
        main
      </div>
    </div>
  )
}

export default ChannelSettingPage;
