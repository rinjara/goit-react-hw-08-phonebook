import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsRTKSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    localStore: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
