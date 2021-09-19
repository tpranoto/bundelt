import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarTabState: "home",
  homeTabState: "events",
};

export const appState = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSidebarTabState: (state, action) => {
      state.sidebarTabState = action.payload.sidebarTabState;
    },
    setHomeTabState:(state,action) =>{
      state.homeTabState = action.payload.homeTabState;
    },
  },
});

export const { setSidebarTabState, setHomeTabState } = appState.actions;

export const selectSidebarTabState = (state) => state.app.sidebarTabState;
export const selectHomeTabState = (state) => state.app.homeTabState;

export default appState.reducer;
