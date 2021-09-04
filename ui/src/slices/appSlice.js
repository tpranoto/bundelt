import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarTabState: "home",
};

export const appState = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSidebarTabState: (state, action) => {
      state.sidebarTabState = action.payload.sidebarTabState;
    },
  },
});

export const { setSidebarTabState } = appState.actions;

export const selectSidebarTabState = (state) => state.app.sidebarTabState;

export default appState.reducer;
