import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import groupReducer from '../slices/groupSlice';
import appReducer from '../slices/appSlice';
import eventReducer from '../slices/eventSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    group: groupReducer,
    app: appReducer,
    event: eventReducer,
  },
});
