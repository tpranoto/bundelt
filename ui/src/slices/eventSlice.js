import { createSlice } from '@reduxjs/toolkit';

export const eventSlice = createSlice({
    name: 'event',
    initialState: {
        event: null,
    },
    reducers: {
        setEventInfo: (state, action) => {
            state.event = action.payload;
        }
    },
});

export const { setEventInfo } = eventSlice.actions;

export const selectEventInfo = (state) => state.event.event;

export default eventSlice.reducer;
