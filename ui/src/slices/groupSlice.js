import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groupId: null,
  groupName: null,
};

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    setGroupInfo: (state, action) => {
      state.groupId = action.payload.groupId;
      state.groupName = action.payload.groupName;
      state.desc = action.payload.desc;
      state.timestamp = action.payload.timestamp;
    },
  },
});

export const { setGroupInfo } = groupSlice.actions;

export const selectGroupId = (state) => state.group.groupId;
export const selectGroupName = (state) => state.group.groupName;
export const selectGroupDesc = (state) => state.group.desc;
export const selectGroupTimestamp = (state) => state.group.timestamp;

export default groupSlice.reducer;
