import { configureStore } from '@reduxjs/toolkit';

import filterReducers from '@/redux/features/filterSlice';
import productsReducers from '@/redux/features/productSlice';
import userReducers from '@/redux/features/userSlice';

const store = configureStore({
  reducer: {
    products: productsReducers,
    filter: filterReducers,
    user: userReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
