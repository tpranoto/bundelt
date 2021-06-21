import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import groupReducer from '../slices/groupSlice';
import channelReducer from '../slices/channelSlice';
import appReducer from '../slices/appSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    group: groupReducer,
    app: appReducer,
    channel: channelReducer,
  },
});
