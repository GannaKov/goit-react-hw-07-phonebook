import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  // Массив входных селекторов
  [selectFilter, selectContacts],
  // Функция преобразователь
  (filter, items) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// export const selectVisibleContacts = state => {
//   console.log('Calculating task count');
//   const filter = selectFilter(state);
//   const items = selectContacts(state);
//   const normalizedFilter = filter.toLowerCase();
//   return items.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
