import React from 'react';
import './DiscoverHeader.css';
import ExploreIcon from '@material-ui/icons/Explore';

const DiscoverHeader = () =>{
    return(
        <div className="discover_page_header">
            <div className="discover_page_header_left">
                <ExploreIcon className="discover_page_header_icon"/>
                
                <div className="discover_page_header_title">
                    <h4>Discover</h4>
                </div>
            </div>
        </div>
    )
}

export default DiscoverHeader;
