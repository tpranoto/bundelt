import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainTabState: "home",
  homeTabState: "events",
  groupTabState: "home",
  eventTabState: "home",
};

export const appState = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMainTabState: (state, action) => {
      state.mainTabState = action.payload.mainTabState;
    },
    setHomeTabState: (state, action) => {
      state.homeTabState = action.payload.homeTabState;
    },
    setGroupTabState: (state, action) => {
      state.groupTabState = action.payload.groupTabState;
    },
    setEventTabState: (state, action) => {
      state.eventTabState = action.payload.eventTabState;
    }
  },
});

export const { setMainTabState, setHomeTabState, setGroupTabState, setEventTabState } = appState.actions;

export const selectMainTabState = (state) => state.app.mainTabState;
export const selectHomeTabState = (state) => state.app.homeTabState;
export const selectGroupTabState = (state) => state.app.groupTabState;
export const selectEventTabState = (state) => state.app.eventTabState;

export default appState.reducer;
