import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SidebarGroup.css';
import NewGroupDialog from '../../Dialog/NewGroupDialog/NewGroupDialog';
import { setMainTabState, selectMainTabState } from '../../../slices/appSlice';
import { setGroupInfo, selectGroupId } from '../../../slices/groupSlice';
import { selectUser } from '../../../slices/userSlice';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AddIcon from '@material-ui/icons/Add';

const SidebarGroup = () => {
    const dispatch = useDispatch();
    const mainTab = useSelector(selectMainTabState);
    const user = useSelector(selectUser);
    const groupId = useSelector(selectGroupId);
    const [groups, setGroups] = useState([]);
    const [expandedCategory, setExpandedCategory] = useState(true);
    const [openNewGroupDialog, setOpenNewGroupDialog] = useState(false);

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
            setMainTabState({
                mainTabState: "group_" + id,
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

    const handleCategoryExpand = () => {
        setExpandedCategory(!expandedCategory);
    };

    return (
        <div className="sidebar_group">
            <div className="sidebar_group_header">
                {
                    expandedCategory ?
                        <ArrowDropDownIcon
                            className="sidebar_header_group_arrow"
                            onClick={handleCategoryExpand}
                        /> :
                        <ArrowRightIcon
                            className="sidebar_header_group_arrow"
                            onClick={handleCategoryExpand}
                        />
                }
                <div
                    className="sidebar_header_group_title_container"
                    onClick={handleCategoryExpand}

                >
                    <span className="sidebar_header_group_title"> My Groups</span>
                </div>

                <div
                    className="sidebar_header_group_add_icon_container"
                    onClick={() => setOpenNewGroupDialog(true)}
                >
                    <AddIcon className="sidebar_header_group_add_icon" />
                </div>
            </div>

            {
                expandedCategory ? (
                    <>
                        {
                            groups.map(({ id, groupName, desc, timestamp }) => (

                                <div
                                    className={mainTab === "group_" + id ? "selected_group_tab" : "group_tab"}
                                    onClick={() => handleSidebarTab(id, groupName, desc, timestamp)}
                                >
                                    <span className="group_tab_title"># {groupName}</span>
                                </div>

                            ))
                        }
                    </>
                ) : null
            }

            {
                openNewGroupDialog ? (
                    <NewGroupDialog
                        show={openNewGroupDialog}
                        handleCloseGroupDialog={() => setOpenNewGroupDialog(false)}
                    />
                ) : null
            }
        </div>
    );
};

export default SidebarGroup;
