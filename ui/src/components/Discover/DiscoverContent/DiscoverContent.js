import React from 'react';
import './DiscoverContent.css';
import DiscoverCommunity from './DiscoverCommunity/DiscoverCommunity';

const DiscoverContent = ({commName, commDesc}) => {
    return (
        <div className="discover_content">
            <DiscoverCommunity
                commName={commName}
                commDesc={commDesc}
            />

            <div className="discover_content_empty_div" />
        </div>
    )
}

export default DiscoverContent;
