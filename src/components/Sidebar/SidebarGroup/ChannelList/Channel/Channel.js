import React from 'react';
import './Channel.css';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../../../../slices/channelSlice';
import { selectChannelId } from '../../../../../slices/channelSlice';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Tooltip from '../../../../../utils/tooltip/Tooltip.js';

const Channel = ({ id, channelName }) => {
    const dispatch = useDispatch();
    const channelId = useSelector(selectChannelId);

    const handleChannelChange = () => {
        dispatch(
            setChannelInfo({
                channelId: id,
                channelName: channelName,
            })
        );
    };

    return (
        <div className={channelId === id ? "channel_selected" : "channel"} onClick={handleChannelChange}>
            <span>{channelName}</span>

            <div className="channel_option">
                <Tooltip
                    content="Invite"
                    direction="top"
                >
                    <PersonAddIcon
                        id="channel_option_icon"
                    />
                </ Tooltip>

                <Tooltip
                    content="Edit Channel"
                    direction="top"
                >
                    <SettingsIcon id="channel_option_icon" />
                </ Tooltip>

            </div>
        </div>
    );
}

export default Channel;
