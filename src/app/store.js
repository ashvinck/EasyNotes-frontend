import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/api';
import userAuthReducer from '../features/user/userSlice';
import notesReducer from '../features/notes/notesSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    userAuth: userAuthReducer,
    notes: notesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
