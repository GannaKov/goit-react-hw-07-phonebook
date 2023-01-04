import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    putFilter(state, action) {
      return action.payload;
    }, // should be return action.payload? it was  putFilter:(state, action) => (state = action.payload),
  },
});
// Экспортируем генераторы экшенов и редюсер
export const { putFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
