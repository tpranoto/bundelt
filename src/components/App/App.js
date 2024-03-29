import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import Sidebar from '../Sidebar/Sidebar.js'
import GroupChat from '../GroupChat/GroupChat.js'
import Login from '../Login/Login.js'
import Home from '../Home/Home.js'
import Discover from '../Discover/Discover.js'
import { selectUser } from '../../slices/userSlice'
import { selectGroupState } from '../../slices/appSlice'
import { auth } from '../../utils/firebase/firebase';
import { login, logout } from '../../slices/userSlice'

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const groupState = useSelector(selectGroupState);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      } else {
        dispatch(logout());
      }
    })

    document.title = "Bundelt"
  }, [dispatch])

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          {
            groupState === "home" ? (
              <Home />
            ) : groupState === "discover" ? (
              <Discover />
            ) : (
              <GroupChat />
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
