import { createSlice } from '@reduxjs/toolkit';

export const ResourceSlice = createSlice({
  name: 'timeline',
  initialState: {
    filterCategory: 'none',
    filterChoice: 'none'
  },
  reducers: {
    selectFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
    selectFilterChoice: (state, action) => {
      state.filterChoice = action.payload;
    },
    resetFilters: (state) => {
      state.filterCategory = 'none';
      state.filterChoice = 'none';
    }
  }
});

// Action creators are generated for each case reducer function
export const { selectFilterCategory, selectFilterChoice, resetFilters } = ResourceSlice.actions;

export default ResourceSlice.reducer;