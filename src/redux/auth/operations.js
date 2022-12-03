import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authAxiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const authHeaderToken = {
  set: token => {
    authAxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    authAxiosInstance.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authAxiosInstance.post(
        'users/signup',
        credentials
      );
      authHeaderToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authAxiosInstance.post('users/login', credentials);
      authHeaderToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await authAxiosInstance.post('users/logout');
    authHeaderToken.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const currentToken = thunkAPI.getState().auth.token;
    if (currentToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    try {
      authHeaderToken.set(currentToken);
      const { data } = await authAxiosInstance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
