import React from 'react';
import './Header.css';
import logo from '../../assets/roundedlogo.png';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import { useDispatch } from 'react-redux';
import { setSidebarTabState } from '../../slices/appSlice';
import SearchIcon from '@material-ui/icons/Search';

const Header = ({ user }) => {
    const dispatch = useDispatch();

    const handleHome = () => {
        dispatch(setSidebarTabState({
            sidebarTabState: "home",
        }));
    }

    return (
        <div className="header">
            <div
                className="header_logo_cont"
                onClick={handleHome}
            >
                <img
                    src={logo}
                    alt=""
                />
                <h2>bundelt</h2>
            </div>

            <div className="header_location_search">
                <input placeholder="Location" />
                <SearchIcon />
            </div>

            <HeaderProfile user={user} />
        </div>
    )
}

export default Header;
