import { createAsyncThunk } from '@reduxjs/toolkit';
import { currentUsers, logIn, logOut, signUp } from 'service/authApi';
import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token} `;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ` `;
};

export const singUpThunk = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const result = await signUp(data);
      setAuthHeader(result.token);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const result = await logIn(data);
      setAuthHeader(result.token);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await logOut();
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUsersThunk = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('User not found  ');
    }
    setAuthHeader(token);
    try {
      const response = await currentUsers();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
