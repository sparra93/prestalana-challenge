import React from 'react';
import { useSelector } from 'react-redux';

import {
  CartContainer,
  CartItem,
  CartItemDetails,
  CartItemInfo,
  CartItemName,
  CartItemPrice,
  CartTitle,
} from '@/components/Cart/Cart.style';
import { selectCart } from '@/redux/features/productSlice';
import type { ICartProduct } from '@/shared/Interfaces/Product.interface';

const Cart: React.FC = () => {
  const cartProducts = useSelector(selectCart);

  return (
    <CartContainer>
      <CartTitle>Mi Carrito</CartTitle>
      {cartProducts.map((product: ICartProduct) => (
        <CartItem key={product.id}>
          <CartItemDetails>
            <CartItemName>{product.name}</CartItemName>
            <CartItemInfo>{product.year}</CartItemInfo>
          </CartItemDetails>
          <CartItemPrice>Qty {product.quantity}</CartItemPrice>
        </CartItem>
      ))}
    </CartContainer>
  );
};

export default Cart;
