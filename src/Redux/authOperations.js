import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (datareg, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', datareg);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
