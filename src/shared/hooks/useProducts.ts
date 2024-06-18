import { useDispatch, useSelector } from 'react-redux';

import { getAll } from '@/redux/features/productSlice';
import type { AppDispatch, RootState } from '@/redux/store';

import type { IProduct } from '../Interfaces/Product.interface';

export interface IUseProducts {
  products: IProduct[];
  loading: boolean;
  error: boolean;
  loadProducts: () => void;
}

export const useFetchProducts = (): IUseProducts => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);
  const loaded = useSelector((state: RootState) => state.products.loaded);

  const loadProducts = (): void => {
    if (!loaded) {
      dispatch(getAll());
    }
  };

  return { products, loading, error, loadProducts };
};
