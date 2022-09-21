import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/auth';

export const signup = createAsyncThunk('auth/signup', async data => {
  try {
    const result = await api.forSignup(data);
    return result;
  } catch (error) {
    alert(
      'Error during registration! Check if the data is filled in correctly or try again later!'
    );
  }
});

export const login = createAsyncThunk('auth/login', async data => {
  try {
    const result = await api.forLogin(data);
    return result;
  } catch (error) {
    alert('You have entered an incorrect email or password!');
  }
});

export const logout = createAsyncThunk('auth/logout', async _ => {
  try {
    const result = await api.forLogout();
    return result;
  } catch (error) {
    alert('Something went wrong!');
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
