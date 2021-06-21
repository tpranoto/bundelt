import React from 'react';
import './Channel.css';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../../../../slices/channelSlice';
import { selectChannelId } from '../../../../../slices/channelSlice';
import { useSelector } from 'react-redux';

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
        <div className={channelId===id?"channel_selected":"channel"} onClick={handleChannelChange}>
            <h4 className="channel_name">
                <span>{channelName}</span>
            </h4>
        </div>
    );
}

export default Channel;
