import React from 'react';
import './ChannelSettingPage.css';
import SidebarSettingPage from './Sidebar/SidebarSettingPage';
import { useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { selectGroupId } from '../../slices/groupSlice';
import { useSelector } from 'react-redux';

const ChannelSettingPage = ({ handleClose, handleCloseNorm, channelId, channelName }) => {
  const groupId = useSelector(selectGroupId);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        handleCloseNorm();
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
        groupId={groupId}
        channelId={channelId}
        channelName={channelName}
      />

      <div className="channel_setting_page_main">
        main
      </div>
    </div>
  )
}

export default ChannelSettingPage;
