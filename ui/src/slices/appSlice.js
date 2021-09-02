import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarTabState: "home",
  homeTabState: "friends",
  friendTabState: "online",
  discoverTabState: "home",
  showCreateChannel: false,
};

export const appState = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSidebarTabState: (state, action) => {
      state.sidebarTabState = action.payload.sidebarTabState;
    },
    setHomeTabState: (state, action) => {
      state.homeTabState = action.payload.homeTabState;
    },
    setFriendTabState: (state, action) => {
      state.friendTabState = action.payload.friendTabState;
    },
    setDiscoverTabState: (state, action) => {
      state.discoverTabState = action.payload.discoverTabState;
    },
    setShowCreateChannel: (state, action) => {
      state.showCreateChannel = action.payload.showCreateChannel;
    },
  },
});

export const { setSidebarTabState, setHomeTabState, setFriendTabState, setDiscoverTabState, setShowCreateChannel } = appState.actions;

export const selectSidebarTabState = (state) => state.app.sidebarTabState;
export const selectHomeTabState = (state) => state.app.homeTabState;
export const selectFriendTabState = (state) => state.app.friendTabState;
export const selectDiscoverTabState = (state) => state.app.discoverTabState;
export const selectShowCreateChannel = (state) => state.app.showCreateChannel;

export default appState.reducer;
