import type { IProductsState } from '../Interfaces/Product.interface';

export const productSliceInitialState: IProductsState = {
  products: [],
  cart: [],
  favorites: [],
  error: false,
  loading: false,
  loaded: false,
  cartCountTotal: 0,
};
