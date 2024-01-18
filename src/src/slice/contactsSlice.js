import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddContactThunk,
  fetchDeleteContactThunk,
  fetchContactsThunk,
} from './thunk';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })

      .addCase(fetchAddContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.isLoading = false;
      })

      .addCase(fetchDeleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.isLoading = false;
      })

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export default contactsSlice.reducer;
