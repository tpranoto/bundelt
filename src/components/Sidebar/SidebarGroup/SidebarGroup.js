import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SidebarGroup.css';
import NewGroupDialog from '../../Dialog/NewGroupDialog/NewGroupDialog';
import db from '../../../utils/firebase/firebase';
import { setSidebarTabState, selectSidebarTabState } from '../../../slices/appSlice';
import { setGroupInfo } from '../../../slices/groupSlice';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AddIcon from '@material-ui/icons/Add';

const SidebarGroup = () => {
    const dispatch = useDispatch();
    const sidebarTab = useSelector(selectSidebarTabState);
    const [groups, setGroups] = useState([]);
    const [expandedCategory, setExpandedCategory] = useState(true);
    const [openNewGroupDialog, setOpenNewGroupDialog] = useState(false);

    useEffect(() => {
        db.collection('groups').onSnapshot((snapshot) =>
            setGroups(snapshot.docs.map((doc) => ({
                id: doc.id,
                group: doc.data(),
            })))
        );
    }, [])

    const handleSidebarTab = (id, gName) => {
        dispatch(
            setSidebarTabState({
                sidebarTabState: id,
            })
        );

        dispatch(
            setGroupInfo({
                groupId: id,
                groupName: gName,
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
                        <ArrowDropDownIcon c
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
                    <span className="sidebar_header_group_title">Bundel</span>
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
                            groups.map(({ id, group }) => (

                                <div
                                    className={sidebarTab === id ? "selected_group_tab" : "group_tab"}
                                    onClick={() => handleSidebarTab(id, group.groupName)}
                                >
                                    <span className="group_tab_title">{group.groupName}</span>
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
