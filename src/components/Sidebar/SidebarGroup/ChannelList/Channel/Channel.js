import React, { useState } from 'react';
import './Channel.css';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import ChannelSettingPage from '../../../../ChannelSettingPage/ChannelSettingPage';

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

const Channel = ({ channelId, channelName, activeChannel, onClick }) => {
    const tooltipStyle = channelTooltipStyle();
    const [displayChannelSetting, setDisplayChannelSetting] = useState(false);

    const handleOpenSetting = (event) =>{
        event.stopPropagation();
        setDisplayChannelSetting(true);
    }

    const handleCloseSetting = (event) =>{
        event.stopPropagation();
        setDisplayChannelSetting(false);
    }

    return (
        <div
            className={activeChannel ? "channel_selected" : "channel"}
            onClick={onClick}
        >
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
                        onClick={handleOpenSetting}
                    >
                        <SettingsIcon />
                    </ div>
                </Tooltip>

            </div>

            {
                displayChannelSetting && (
                    <ChannelSettingPage
                        handleClose={handleCloseSetting}
                        handleCloseNorm={()=>setDisplayChannelSetting(false)}
                        channelId={channelId}
                        channelName={channelName}
                    />
                )
            }

        </div>
    );
}

export default Channel;
