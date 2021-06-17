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
    },
  },
});

export const { setGroupInfo } = groupSlice.actions;

export const selectGroupId = (state) => state.group.groupId;
export const selectGroupName = (state) => state.group.groupName;

export default groupSlice.reducer;
