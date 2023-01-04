import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload); //without return
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        item => item.id === action.payload
      );
      state.contacts.splice(index, 1); //filtr with return?
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
