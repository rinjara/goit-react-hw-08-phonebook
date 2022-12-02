import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authAxiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const token = {
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
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
