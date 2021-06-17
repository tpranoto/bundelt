import React from 'react';
import './SidebarSetting.css';
import { auth } from '../../../firebase';

const SidebarSetting = () => {
    return (
        <div className="sidebar_setting">
            <div className="sidebar_setting_box">
                <div
                    className="sidebar_setting_logout"
                    onClick={() => auth.signOut()}
                >
                    Logout
                </div>
            </div>

            <div className="sidebar_setting_info">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt=""
                    />
                <p>Version 1.0</p>
            </div>
        </div>
    )
}

export default SidebarSetting;
