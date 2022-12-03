import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, registration } from './operations';

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
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
    //   .addCase(refreshUser.fulfilled, (state, action) => {
    //     state.user = action.payload;
    //     state.isLoggedIn = true;
    //   });
  },
});

export const authReducer = authSlice.reducer;
