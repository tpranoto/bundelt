import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import NoteIcon from '@material-ui/icons/Note';
import ExploreIcon from '@material-ui/icons/Explore';
import NewGroupDialog from '../Dialog/NewGroupDialog/NewGroupDialog';
import { useDispatch, useSelector } from 'react-redux';
import { selectGroupTabState, setGroupTabState } from '../../slices/appSlice';
import { setGroupInfo, selectGroupId } from '../../slices/groupSlice';
import { selectUser } from '../../slices/userSlice';

const Sidebar = () => {
    const [openNewGroupDialog, setOpenNewGroupDialog] = useState(false);

    return (
        <div className="sidebar_group">
            <h2 className="sidebar_group_title">Groups</h2>

            <div className="sidebar_group_search">
                <input placeholder="Search groups" />
                <SearchIcon />
            </div>

            <div className="sidebar_group_inside">
                <SidebarTab
                    tabName="home"
                    tabTitle="Home"
                />

                <SidebarTab
                    tabName="discover"
                    tabTitle="Discover"
                />

                <div
                    className="sidebar_group_create_button"
                    onClick={() => setOpenNewGroupDialog(true)}
                >
                    + Create New Group
                </div>

                <hr className="sidebar_group_hr_divider" />

                <SidebarGroupList />
            </div>

            {
                openNewGroupDialog ? (
                    <NewGroupDialog
                        show={openNewGroupDialog}
                        handleCloseGroupDialog={() => setOpenNewGroupDialog(false)}
                    />
                ) : null
            }
        </div>
    )
}

export default Sidebar;

const SidebarTab = ({ tabName, tabTitle }) => {
    const dispatch = useDispatch();
    const groupTab = useSelector(selectGroupTabState);

    const handleTab = () => {
        dispatch(
            setGroupTabState({
                groupTabState: tabName,
            })
        );
    };

    return (
        <div className="group_tab_cont">
            <div
                className={groupTab === tabName ? "group_tab_selected" : "group_tab_def"}
                onClick={handleTab}
            >
                {
                    tabName === "home" ? (
                        <NoteIcon className="group_tab_icon" />
                    ) : (
                        <ExploreIcon className="group_tab_icon" />
                    )
                }

                <div className="group_tab_title_container">
                    <span className="group_tab_title">{tabTitle}</span>
                </div>
            </div>

        </div >
    )
}

const SidebarGroupList = () => {
    const dispatch = useDispatch();
    const groupTab = useSelector(selectGroupTabState);
    const user = useSelector(selectUser);
    const groupId = useSelector(selectGroupId);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch('/user_group/get?user=' + user.uid)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            }).then((responseJson) => {
                setGroups(responseJson.map((doc) => ({
                    id: doc.group_id,
                    groupName: doc.group_name,
                    desc: doc.desc,
                    timestamp: doc.created,
                })));
            }).catch((error) => {
                console.log("error: ", error);
            });
    }, [user.uid, groupId])

    const handleSidebarTab = (id, gName, desc, timestamp) => {
        dispatch(
            setGroupTabState({
                groupTabState: "group_" + id,
            })
        );

        dispatch(
            setGroupInfo({
                groupId: id,
                groupName: gName,
                desc: desc,
                timestamp: timestamp,
            })
        )
    };

    return (
        <div className="sidebar_group_list">
            <div className="sidebar_group_list_header">
                <span className="sidebar_header_group_list_title"> My Groups</span>
            </div>

            {
                groups.map(({ id, groupName, desc, timestamp }) => (

                    <div
                        className={groupTab === "group_" + id ? "selected_group_list_tab" : "group_list_tab"}
                        onClick={() => handleSidebarTab(id, groupName, desc, timestamp)}
                    >
                        <span className="group_list_tab_title"># {groupName}</span>
                    </div>

                ))
            }
        </div>
    );
};
