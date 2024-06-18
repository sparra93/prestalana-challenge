import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';
import { fetchProducts } from '@/services/products';
import { EMAIL_NAME, FAVORITES_NAME } from '@/shared/constants/sessionStorage';
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

interface ProductsState {
  products: IProduct[];
  cart: ICartProduct[];
  favorites: IProduct[];
  loading: boolean;
  error: boolean;
  loaded: boolean;
  cartCountTotal: number;
}

const initialState: ProductsState = {
  products: [],
  cart: [],
  favorites: [],
  error: false,
  loading: false,
  loaded: false,
  cartCountTotal: 0,
};

export const getAll = createAsyncThunk('products/getAll', async () => {
  const response = await fetchProducts();
  const data: IProductsResponse = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
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
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload,
      );
      const index = state.cart.findIndex(
        (product) => product.id === action.payload,
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
        state.cartCountTotal -= 1;
      }
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
