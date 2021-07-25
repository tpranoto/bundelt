import React from 'react';
import './Discover.css';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector } from 'react-redux';
import { selectDiscoverTabState } from '../../slices/appSlice';
import DiscoverContent from './DiscoverContent/DiscoverContent';

const Discover = () => {
    const discoverTabState = useSelector(selectDiscoverTabState);

    let discoverConst = "Communities";
    if (discoverTabState === "market") {
        discoverConst = "Markets"
    }

    if (discoverTabState === "study") {
        discoverConst = "Study Centers";
    }

    if (discoverTabState === "entertainment") {
        discoverConst = "Entertainments"
    }

    return (
        <div className="discover_page">
            <div className="discover_content_search_bg">
                <h3>
                    Find Nearby {discoverConst} on Bundelt
                </h3>

                <div className="discover_content_search_bar">
                    <input placeholder="Discover" />
                    <SearchIcon />
                </div>
            </div>

            <DiscoverContent
                commName="Community 1"
                commDesc="Description of a community. Welcome you fucking wanker"
            />

            <DiscoverContent
                commName="Community 2"
                commDesc="Description of a community. Welcome you fucking wanker"
            />

            <DiscoverContent
                commName="Community 3"
                commDesc="Description of a community. Welcome you fucking wanker"
            />

            <DiscoverContent
                commName="Community 3"
                commDesc="Description of a community. Welcome you fucking wanker"
            />

            <div> 1 2 ... 100</div>
        </div>
    );
};

export default Discover;
