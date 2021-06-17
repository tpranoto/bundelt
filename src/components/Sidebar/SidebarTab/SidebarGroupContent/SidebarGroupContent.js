import React, { useState } from 'react';
import './SidebarGroupContent.css'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import SidebarGroup from '../SidebarGroup/SidebarGroup.js'
import db from '../../../../firebase';
import { useEffect } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const SidebarGroupContent = () => {
    const [groups, setGroups] = useState([]);

    const handleFindGroups = () => {

    }
    const handleAddGroups = () => {
        const groupName = prompt("Enter group name");

        if (groupName) {
            db.collection('groups').add({
                groupName: groupName,
            });
        }
    }

    useEffect(() => {
        db.collection('groups').onSnapshot((snapshot) =>
            setGroups(snapshot.docs.map((doc) => ({
                id: doc.id,
                group: doc.data(),
            })))
        );
    }, [])

    return (
        <div className="sidebar_group">
            <div className="sidebar_group_header">
                <div className="sidebar_header">
                    <ExpandMoreIcon />
                    <h4>Groups</h4>
                </div>

                <div>
                    <SearchIcon 
                        onClick={handleFindGroups} 
                        className="sidebar_find_group"
                    />
                    <AddIcon 
                        onClick={handleAddGroups} 
                        className="sidebar_add_group"
                    />
                </div>
            </div>

            <div className= "sidebar_group_search_container">
                <div className="sidebar_group_search">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
            </div>

            <div className="sidebar_group_list">
                <div className="inner_sidebar_group_list">
                {groups.map(({ id, group }) => (
                    <SidebarGroup key={id} id={id} groupName={group.groupName} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default SidebarGroupContent;
