import { createSlice } from '@reduxjs/toolkit';
//import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = { items: [] };
//const contactsInitialState = { items: [], isLoading: false, error: null };
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload); //without return
      },
      // prepare(name, number) {
      //   return {
      //     payload: { id: nanoid(), name, number },
      //   };
      // },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1); //filtr with return?
    },
  },
});
// Экспортируем генераторы экшенов и редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
// const contactsReducer = contactsSlice.reducer;

//Persist
const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactPersistReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }
