import React, { useState } from 'react';
import './GroupBar.css'
import Group from './Group/Group.js'
import db from '../../../firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setGroupInfo } from '../../../slices/groupSlice';
import { setAppInfo } from '../../../slices/appSlice';
import { selectGroupState } from '../../../slices/appSlice';
import { useSelector } from 'react-redux';


const GroupBar = () => {
    const dispatch = useDispatch();
    const groupName = useSelector(selectGroupState);
    const [groups, setGroups] = useState([]);
    const [activeTabs, setActiveTabs] = useState(groupName);

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
        const gName = prompt("Enter group name");

        if (gName) {
            db.collection('groups').add({
                groupName: gName,
            }).then((docRef) => {
                console.log(docRef);
                db.collection('groups')
                    .doc(docRef.id)
                    .collection('channels')
                    .add({
                        channelName: "general",
                    });

                handleGroupIcon(docRef.id, gName);
            });
        }
    };

    const handleFindIcon = () => {
        setActiveTabs("find");
        dispatch(
            setAppInfo({
                groupState: "find",
            })
        );
    };

    return (
        <div className="group_bar">
            <Group
                id="home_group"
                iconType="home"
                pic="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                active={activeTabs === "home"}
                onClickFunc={handleHomeIcon}
            />

            {groups.map(({ id, group }) => (
                <Group
                    id={id}
                    iconType="group"
                    groupName={group.groupName}
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

        </div>
    )
}

export default GroupBar;
