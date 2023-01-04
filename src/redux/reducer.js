// If without Slice

// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, putFilter } from './actions';

// const contactsInitialState = [];
// // First Version
// // export const contactsReducer = createReducer(contactsInitialState, {
// //   [addContact]: (state, action) => {
// //     const checkName = state
// //       .map(contact => contact.name.toLowerCase())
// //       .some(contact => contact === action.payload.name.toLowerCase());
// //     if (!checkName) {
// //       return [...state, action.payload];//
// //     } else {
// //       window.alert(`${action.payload.name} is already in contacts `);
// //     }
// //   },

// //   [deleteContact]: (state, action) => {
// //     return state.filter(contact => contact.id !== action.payload); //
// //   },
// // });
// //-----------------------------
// // Second Version
// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     // ✅ Immer заменит это на операцию обновления
//     const checkName = state
//       .map(contact => contact.name.toLowerCase())
//       .some(contact => contact === action.payload.name.toLowerCase());
//     if (!checkName) {
//       state.push(action.payload);
//     } else {
//       window.alert(`${action.payload.name} is already in contacts `);
//     }
//   },
//   [deleteContact]: (state, action) => {
//     // ✅ Immer заменит это на операцию обновления
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
// });
// //-------------------------
// const filtersInitialState = () => '';

// //First Version
// // export const filtersReducer = createReducer(filtersInitialState, {
// //   [putFilter]: (state, action) =>
// //   {  return action.payload} //without return???

// // });
// //--------------------
// // Second Version
// export const filtersReducer = createReducer(filtersInitialState, {
//   [putFilter]: (state, action) =>
//     action.payload
//  //  [putFilter]: (state, action) => (state = action.payload),
// });
