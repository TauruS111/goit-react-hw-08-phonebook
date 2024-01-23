import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.contacts;
export const selectFilter = state => state.filter;
export const selectAddContact = createSelector(
  [selectContact, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
