import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { contactsApi } from './contactsRTKSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    localFilter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
