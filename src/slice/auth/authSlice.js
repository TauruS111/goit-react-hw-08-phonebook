import { createSlice } from '@reduxjs/toolkit';
import {
  currentUsersThunk,
  logInThunk,
  logOutThunk,
  singUpThunk,
} from './thunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
    isRefreshing: false,
  },

  extraReducers: builder => {
    builder
      .addCase(singUpThunk.fulfilled, handleAuthSuccess)
      .addCase(logInThunk.fulfilled, handleAuthSuccess)
      .addCase(logOutThunk.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(currentUsersThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUsersThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(currentUsersThunk.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

function handleAuthSuccess(state, action) {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
}

export default authSlice.reducer;
