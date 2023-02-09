import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query";
import { FetchApiReducer } from './FetchApiReducer';
import HeaderTitle from './HeaderTitle';

export const store = configureStore({
  reducer: {
    header: HeaderTitle,
    [FetchApiReducer.reducerPath] : FetchApiReducer.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }).concat(FetchApiReducer.middleware),
})

setupListeners(store.dispatch)