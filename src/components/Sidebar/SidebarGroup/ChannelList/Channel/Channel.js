import React from 'react';
import './Channel.css';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../../../../slices/channelSlice';
import { selectChannelId } from '../../../../../slices/channelSlice';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const channelTooltipStyle = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        fontSize: 13,
        fontWeight: 600,
    },
}));

const Channel = ({ id, channelName, openChannelSetting }) => {
    const tooltipStyle = channelTooltipStyle();
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
                    id="channel_tooltip"
                    classes={tooltipStyle}
                    title="Invite"
                    placement="top"
                    arrow
                >
                    <div
                        className="channel_option_icon"
                    >
                        <PersonAddIcon />
                    </div>
                </Tooltip>

                <div 
                    className="channel_option_icon_div"
                />

                <Tooltip
                    id="channel_tooltip"
                    classes={tooltipStyle}
                    title="Edit Channel"
                    placement="top"
                    arrow
                >
                    <div
                        className="channel_option_icon"
                        onClick={openChannelSetting}
                    >
                        <SettingsIcon />
                    </ div>
                </Tooltip>

            </div>
        </div>
    );
}

export default Channel;
