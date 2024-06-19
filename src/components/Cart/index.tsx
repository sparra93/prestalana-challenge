import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCart,
  selectFavorites,
} from '@/redux/features/productSlice';
import { useFetchProducts } from '@/shared/hooks/useProducts';
import type { ICartProduct } from '@/shared/Interfaces/Product.interface';

import Panel from '../Panel';
import ProductCard from '../Products/ProductCard';
import { CartItemContainer } from './Cart.style';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCart);
  const favorites = useSelector(selectFavorites);
  const { loadProducts } = useFetchProducts();

  const checkFavorite = (id: number) => {
    return favorites.some((favorite) => favorite.id === id);
  };
  const onRemoveProduct = (product: ICartProduct) => {
    dispatch(removeFromCart(product));
  };
  const onDecreaseQuantity = (product: ICartProduct) => {
    dispatch(decreaseQuantity(product));
  };
  const onIncreaseQuantity = (product: ICartProduct) => {
    dispatch(increaseQuantity(product));
  };

  useEffect(() => {
    loadProducts();
  });

  return (
    <CartItemContainer>
      <Panel title="Shopping bag">
        {cartProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showRemove
            showFavorites
            isFavorite={checkFavorite(product.id)}
            handleRemoveCart={() => {
              onRemoveProduct(product);
            }}
            handleDecreaseQuantity={() => {
              onDecreaseQuantity(product);
            }}
            handleIncreaseQuantity={() => {
              onIncreaseQuantity(product);
            }}
            showQuantities
          />
        ))}
      </Panel>
    </CartItemContainer>
  );
};

export default Cart;
