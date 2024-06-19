import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';
import { fetchProducts } from '@/services/products';
import { productSliceInitialState } from '@/shared/constants/products';
import {
  CART_NAME,
  EMAIL_NAME,
  FAVORITES_NAME,
} from '@/shared/constants/sessionStorage';
import {
  getFromLocalStorage,
  getFromSessionStorage,
  setLocalStorage,
} from '@/shared/helpers/storage';
import type {
  ICartProduct,
  IProduct,
  IProductsResponse,
} from '@/shared/Interfaces/Product.interface';

export const getAll = createAsyncThunk('products/getAll', async () => {
  const response = await fetchProducts();
  const data: IProductsResponse = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: productSliceInitialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      state.cartCountTotal += 1;
      productSlice.caseReducers.setLocalStorageCart(state);
    },
    addToFavorites(state, action: PayloadAction<IProduct>) {
      const productToAdd = action.payload;
      const isDuplicate = state.favorites.some(
        (product) => product.id === productToAdd.id,
      );

      if (!isDuplicate) {
        state.favorites.push(productToAdd);
      }
      productSlice.caseReducers.setLocalStorageFavorites(state);
    },
    removeFromCart(state, action: PayloadAction<ICartProduct>) {
      state.cartCountTotal -= action.payload.quantity;
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id,
      );
      productSlice.caseReducers.setLocalStorageCart(state);
    },
    decreaseQuantity(state, action: PayloadAction<ICartProduct>) {
      const newQuantity = action.payload.quantity - 1;
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id,
      );
      state.cart[index].quantity = newQuantity;
      if (newQuantity < 1) {
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id,
        );
      }
      state.cartCountTotal -= 1;
      productSlice.caseReducers.setLocalStorageCart(state);
    },
    increaseQuantity(state, action: PayloadAction<ICartProduct>) {
      const newQuantity = action.payload.quantity + 1;
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id,
      );
      state.cart[index].quantity = newQuantity;
      state.cartCountTotal += 1;
      productSlice.caseReducers.setLocalStorageCart(state);
    },

    removeFromFavorites(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(
        (product) => product.id !== action.payload,
      );
      productSlice.caseReducers.setLocalStorageFavorites(state);
    },
    loadFavorites(state) {
      const favorites = getFromLocalStorage(FAVORITES_NAME) || '';
      const email = getFromSessionStorage(EMAIL_NAME) || '';
      if (email && favorites) {
        const userFavorites = !JSON.parse(favorites)[email]
          ? []
          : JSON.parse(favorites)[email];
        state.favorites = userFavorites;
      }
    },
    loadCart(state) {
      const cart = getFromLocalStorage(CART_NAME) || '';
      const email = getFromSessionStorage(EMAIL_NAME) || '';
      if (email && cart) {
        const userCart = !JSON.parse(cart)[email]
          ? []
          : JSON.parse(cart)[email];
        state.cart = userCart;
        state.cartCountTotal = state.cart.reduce(
          (accumulator, currentProduct) => {
            return accumulator + currentProduct.quantity;
          },
          0,
        );
      }
    },
    setLocalStorageFavorites: (state) => {
      const favorites = getFromLocalStorage(FAVORITES_NAME) || '';
      const email = getFromSessionStorage(EMAIL_NAME) || '';
      if (email) {
        const prev = favorites ? JSON.parse(favorites) : {};
        const newFavorites = {
          ...prev,
          [email]: state.favorites,
        };
        setLocalStorage(FAVORITES_NAME, JSON.stringify(newFavorites));
      }
    },
    setLocalStorageCart: (state) => {
      const cart = getFromLocalStorage(CART_NAME) || '';
      const email = getFromSessionStorage(EMAIL_NAME) || '';
      if (email) {
        const prev = cart ? JSON.parse(cart) : {};
        const newCart = {
          ...prev,
          [email]: state.cart,
        };
        setLocalStorage(CART_NAME, JSON.stringify(newCart));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
        state.favorites = [];
        state.loaded = true;
        productSlice.caseReducers.loadFavorites(state);
        productSlice.caseReducers.loadCart(state);
      })
      .addCase(getAll.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {
  addToCart,
  addToFavorites,
  removeFromCart,
  removeFromFavorites,
  decreaseQuantity,
  increaseQuantity,
} = productSlice.actions;
export const selectProducts = (state: RootState): IProduct[] =>
  state.products.products;
export const selectCart = (state: RootState): ICartProduct[] =>
  state.products.cart;
export const selectFavorites = (state: RootState): IProduct[] =>
  state.products.favorites;
export const selectCartCountTotal = (state: RootState): number =>
  state.products.cartCountTotal;

export default productSlice.reducer;
