import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import GroupChat from '../GroupChat/GroupChat';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Discover from '../Discover/Discover';
import { selectUser } from '../../slices/userSlice';
import { selectSidebarTabState, setSidebarTabState } from '../../slices/appSlice';
import { setGroupInfo } from '../../slices/groupSlice';
import { auth } from '../../utils/firebase/firebase';
import { login, logout } from '../../slices/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const sidebarTabState = useSelector(selectSidebarTabState);

  useEffect(() => {
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition((position) => {
      lat = parseFloat(position.coords.latitude).toFixed(3);
      lon = parseFloat(position.coords.longitude).toFixed(3);
    });

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
          lat: lat,
          lon: lon,
        }));
      } else {
        dispatch(logout());

        dispatch((setGroupInfo(null)));

        dispatch(setSidebarTabState({
          sidebarTabState: "home",
        }));
      }
    });

    document.title = "bundelt"
  }, [dispatch], user)

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
