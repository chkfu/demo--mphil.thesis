import { createSlice } from '@reduxjs/toolkit';

export const ForewordSlice = createSlice({
  name: 'timeline',
  initialState: {
    timelineCategory: 'none',
    timelinePeriod: 'none'
  },
  reducers: {
    setTimelineCategory: (state, action) => {
      state.timelineCategory = action.payload;
    },
    setTimelinePeriod: (state, action) => {
      state.timelinePeriod = action.payload;
    },
    reset: (state) => {
      state.timelineCategory = 'none';
      state.timelinePeriod = 'none';
    }
  }
});

// Action creators are generated for each case reducer function
export const { setTimelineCategory, setTimelinePeriod, reset } = ForewordSlice.actions;

export default ForewordSlice.reducer;