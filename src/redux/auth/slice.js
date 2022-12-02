import { createSlice } from '@reduxjs/toolkit';
import { registration } from './operations';

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
      .addCase(registration.pending, (state, action) => {
        return state;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registration.rejected, (state, action) => {
        return state;
      });
    //   .addCase(refreshUser.fulfilled, (state, action) => {
    //     state.user = action.payload;
    //     state.isLoggedIn = true;
    //   });
  },
});

export const authReducer = authSlice.reducer;
