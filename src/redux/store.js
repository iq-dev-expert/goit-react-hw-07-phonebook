import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer, contactsSlice } from 'redux/contactsSlice';
import { filterReducer, filterSlice } from 'redux/filterSlice';

const rootReducer = combineReducers({
  [contactsSlice.name]: contactsReducer,
  [filterSlice.name]: filterReducer,
});

export const store = configureStore({ reducer: rootReducer });
