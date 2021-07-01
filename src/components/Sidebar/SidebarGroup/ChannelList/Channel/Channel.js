import React from 'react';
import './Channel.css';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../../../../slices/channelSlice';
import { selectChannelId } from '../../../../../slices/channelSlice';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useState } from 'react';

const Channel = ({ id, channelName, openChannelSetting }) => {
    const dispatch = useDispatch();
    const channelId = useSelector(selectChannelId);
    const [inviteActive, setInviteActive] = useState(false);
    const [editActive, setEditActive] = useState(false);

    const handleChannelChange = () => {
        dispatch(
            setChannelInfo({
                channelId: id,
                channelName: channelName,
            })
        );
    };

    const showInviteTip = () => {
        setInviteActive(true);
    };

    const hideInviteTip = () => {
        setInviteActive(false);
    };

    const showEditTip = () => {
        setEditActive(true);
    };

    const hideEditTip = () => {
        setEditActive(false);
    };

    return (
        <div className={channelId === id ? "channel_selected" : "channel"} onClick={handleChannelChange}>
            <span>{channelName}</span>

            <div className="channel_option">

                {
                    inviteActive && (
                        <div
                            className="tooltip_channel_add"
                        >
                            Invite
                        </div>
                    )
                }

                <div
                    className="channel_option_icon"
                    onMouseEnter={showInviteTip}
                    onMouseLeave={hideInviteTip}
                >
                    <PersonAddIcon />
                </div>

                <div className="channel_option_icon_div" />


                {
                    editActive && (
                        <div
                            className="tooltip_channel_edit"
                        >
                            Edit Channel
                        </div>
                    )
                }
                <div
                    className="channel_option_icon"
                    onClick={openChannelSetting}
                    onMouseEnter={showEditTip}
                    onMouseLeave={hideEditTip}
                >
                    <SettingsIcon />
                </ div>

            </div>
        </div>
    );
}

export default Channel;
