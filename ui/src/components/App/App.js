import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Group from '../Group/Group';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Event from '../Event/Event';
import { selectUser } from '../../slices/userSlice';
import { selectMainTabState } from '../../slices/appSlice';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

function App() {
  const user = useSelector(selectUser);
  const mainTabState = useSelector(selectMainTabState);

  useEffect(() => {
    document.title = "bundelt"
  }, [])

  return (
    <div className="app">
      {user ? (
        <>
          <Header user={user} />

          <div className="app_content">

            {
              mainTabState === "home" ? (
                <Home />
              ) : mainTabState === "event" ? (
                <Event />
              ) : mainTabState === "group" ? (
                <Group />
              ) : mainTabState === "user" ? (
                <Profile />
              ) : (
                <div>
                  Page Not Found
                </div>
              )
            }
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
