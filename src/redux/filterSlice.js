import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    putFilter(state, action) {
      return action.payload;
    }, 
  },
});

export const { putFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

