import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groupState: "home",
  homeTabState:"friends",
  friendTabState:"online",
};

export const appState = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppInfo: (state, action) => {
      state.groupState = action.payload.groupState;
    },
    setHomeTabState:(state,action)=>{
      state.homeTabState = action.payload.homeTabState;
    },
    setFriendTabState:(state,action)=>{
      state.friendTabState = action.payload.friendTabState;
    },
  },
});

export const { setAppInfo, setHomeTabState, setFriendTabState } = appState.actions;

export const selectGroupState = (state) => state.app.groupState;
export const selectHomeTabState = (state) => state.app.homeTabState;
export const selectFriendTabState = (state) => state.app.friendTabState;

export default appState.reducer;
