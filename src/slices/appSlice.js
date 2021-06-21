import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groupState: "home",
};

export const appState = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppInfo: (state, action) => {
      state.groupState = action.payload.groupState;
    },
  },
});

export const { setAppInfo } = appState.actions;

export const selectGroupState = (state) => state.app.groupState;

export default appState.reducer;
