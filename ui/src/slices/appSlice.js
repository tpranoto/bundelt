import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarTabState: -2,
};

//home: -2
//discover: -1

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
