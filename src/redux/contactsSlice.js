import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
//import { nanoid } from 'nanoid';
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
//const contactsInitialState = { items: [] };
const contactsInitialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [fetchContacts.rejected]: handleRejected,
    //------
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    //--------
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );

      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.items.push(action.payload); //without return
  //     },
  //     // prepare(name, number) {
  //     //   return {
  //     //     payload: { id: nanoid(), name, number },
  //     //   };
  //     // },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.items.findIndex(item => item.id === action.payload);
  //     state.items.splice(index, 1); //filtr with return?
  //   },
  // },
});
// Экспортируем генераторы экшенов и редюсер

export const contactsReducer = contactsSlice.reducer;

//Persist
// const persistConfig = {
//   key: 'contacts',
//   storage,
// };
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;
// export const contactPersistReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }
