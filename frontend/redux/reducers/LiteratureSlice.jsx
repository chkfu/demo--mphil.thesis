import { createSlice } from '@reduxjs/toolkit';

export const LiteratureSlice = createSlice({
  name: 'literature',
  initialState: {
    currAuthor: 0,
    currPublication: 0
  },
  reducers: {
    prevAuthor: (state, action) => {
      if (state.currAuthor === 0) {
        state.currPublication = 0;
        state.currAuthor = action.payload - 1;
      }
      else {
        state.currPublication = 0;
        state.currAuthor -= 1;
      }
    },
    nextAuthor: (state, action) => {
      if (state.currAuthor === action.payload - 1) {
        state.currPublication = 0;
        state.currAuthor = 0;
      }
      else {
        state.currPublication = 0;
        state.currAuthor += 1;
      }
    },
    selectPublication: (state, action) => {
      state.currPublication = action.payload;
    },
    prevPublication: (state, action) => {
      if (action.payload > 0 && state.currPublication >= 1)
        state.currPublication -= 1;
    },
    nextPublication: (state, action) => {
      if (action.payload > 0 && state.currPublication < action.payload - 1)
        state.currPublication += 1;
    }
  }
});

// Action creators are generated for each case reducer function
export const { prevAuthor, nextAuthor, selectPublication, prevPublication, nextPublication } = LiteratureSlice.actions;

export default LiteratureSlice.reducer;