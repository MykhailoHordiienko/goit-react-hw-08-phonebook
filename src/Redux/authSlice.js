import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  refreshUser,
  logOutUser,
  logInUser,
} from './authOperations';
import {
  healperFulfilledUserOn,
  healperFulfilledUserOut,
  healperPendingRefresh,
  healperFulfilledRefresh,
  healperRejectedRefresh,
} from './healpersAuth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, healperFulfilledUserOn)
      .addCase(logInUser.fulfilled, healperFulfilledUserOn)
      .addCase(logOutUser.fulfilled, healperFulfilledUserOut)
      .addCase(refreshUser.pending, healperPendingRefresh)
      .addCase(refreshUser.fulfilled, healperFulfilledRefresh)
      .addCase(refreshUser.rejected, healperRejectedRefresh);
  },
});
