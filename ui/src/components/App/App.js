import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import GroupChat from '../GroupChat/GroupChat';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Discover from '../Discover/Discover';
import { selectUser } from '../../slices/userSlice';
import { selectSidebarTabState } from '../../slices/appSlice';
import { auth } from '../../utils/firebase/firebase';
import { login, logout } from '../../slices/userSlice';
import db from '../../utils/firebase/firebase';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const sidebarTabState = useSelector(selectSidebarTabState);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));

        db.collection('users').where
        .add({
          user_id: authUser.uid,
        });
      } else {
        dispatch(logout());
      }

      

    })

    document.title = "bundelt"
  }, [dispatch])

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
