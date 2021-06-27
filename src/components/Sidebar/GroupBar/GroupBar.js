import React, { useState } from 'react';
import './GroupBar.css';
import Group from './Group/Group.js';
import db from '../../../utils/firebase/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setGroupInfo } from '../../../slices/groupSlice';
import { setAppInfo } from '../../../slices/appSlice';
import { selectGroupState } from '../../../slices/appSlice';
import { useSelector } from 'react-redux';
import logo from '../../../assets/logo192.png';
import { createImageFromInitials } from '../../../utils/default_image/default_image.js';
import NewGroupDialog from './NewGroupDialog/NewGroupDialog.js';

const GroupBar = () => {
    const dispatch = useDispatch();
    const groupName = useSelector(selectGroupState);
    const [groups, setGroups] = useState([]);
    const [activeTabs, setActiveTabs] = useState(groupName);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() => {
        db.collection('groups').onSnapshot((snapshot) =>
            setGroups(snapshot.docs.map((doc) => ({
                id: doc.id,
                group: doc.data(),
            })))
        );
    }, [])

    const handleHomeIcon = () => {
        setActiveTabs("home");
        dispatch(
            setAppInfo({
                groupState: "home",
            })
        );
    };

    const handleGroupIcon = (id, gName) => {
        setActiveTabs(id);
        dispatch(
            setGroupInfo({
                groupId: id,
                groupName: gName,
            })
        );
        dispatch(
            setAppInfo({
                groupState: id,
            })
        );

    };

    const handleAddIcon = () => {
        setActiveTabs("add");
        setShowAddDialog(true);
    };

    const handleFindIcon = () => {
        setActiveTabs("find");
        dispatch(
            setAppInfo({
                groupState: "find",
            })
        );
    };

    const handleCloseDialog = () =>{
        setShowAddDialog(false);
        setActiveTabs(groupName);
    }

    return (
        <div className="group_bar">
            <Group
                id="home_group"
                iconType="home"
                pic={logo}
                active={activeTabs === "home"}
                onClickFunc={handleHomeIcon}
            />

            {groups.map(({ id, group }) => (
                <Group
                    id={id}
                    iconType="group"
                    groupName={group.groupName}
                    pic={createImageFromInitials(200, group.groupName, '#f4e6ff')}
                    active={activeTabs === id}
                    onClickFunc={() => {
                        handleGroupIcon(id, group.groupName);
                    }}
                />
            ))}

            <Group
                id="add_group"
                iconType="add"
                active={activeTabs === "add"}
                onClickFunc={handleAddIcon}
            />

            <Group
                id="find_group"
                iconType="find"
                active={activeTabs === "find"}
                onClickFunc={handleFindIcon}
            />

            <NewGroupDialog 
                show={showAddDialog}
                handleGroupIcon={handleGroupIcon}
                handleCloseDialog={handleCloseDialog}
            />

        </div>
    )
}

export default GroupBar;
