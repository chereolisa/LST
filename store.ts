import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../E-commerce/src/services/productsApi';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});