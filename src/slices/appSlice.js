import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groupState: "home",
  homeTabState: "friends",
  friendTabState: "online",
  discoverTabState: "home",
  showCreateChannel: false,
};

export const appState = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppInfo: (state, action) => {
      state.groupState = action.payload.groupState;
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

export const { setAppInfo, setHomeTabState, setFriendTabState, setDiscoverTabState, setShowCreateChannel } = appState.actions;

export const selectGroupState = (state) => state.app.groupState;
export const selectHomeTabState = (state) => state.app.homeTabState;
export const selectFriendTabState = (state) => state.app.friendTabState;
export const selectDiscoverTabState = (state) => state.app.discoverTabState;
export const selectShowCreateChannel = (state) => state.app.showCreateChannel;

export default appState.reducer;
