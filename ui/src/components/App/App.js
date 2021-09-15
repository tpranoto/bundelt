import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import GroupChat from '../GroupChat/GroupChat';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Discover from '../Discover/Discover';
import { selectUser } from '../../slices/userSlice';
import { selectSidebarTabState } from '../../slices/appSlice';

function App() {
  const user = useSelector(selectUser);
  const sidebarTabState = useSelector(selectSidebarTabState);

  useEffect(() => {
    document.title = "bundelt"
  }, [])

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          {
            sidebarTabState === "home" ? (
              <Home />
            ) : sidebarTabState === "discover" ? (
              <Discover />
            ) : sidebarTabState.startsWith("group_")?(
              <GroupChat />
            ):(
              <div>
                Friend
              </div>
            )
          }
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
