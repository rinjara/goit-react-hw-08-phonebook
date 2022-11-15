// import { createStore } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';
// import persistStore from 'redux-persist/es/persistStore';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(
//   persistConfig,
//   contactsReducer,
//   filterReducer
// );

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});

// export const persistor = persistStore(store);
