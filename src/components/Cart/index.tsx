import React from 'react';
import { useSelector } from 'react-redux';

import {
  CartItem,
  CartItemContainer,
  ItemDetails,
  ItemImage,
  ItemName,
  ItemProperty,
} from '@/components/Cart/Cart.style';
import { selectCart } from '@/redux/features/productSlice';

const Cart: React.FC = () => {
  const cartProducts = useSelector(selectCart);

  return (
    <CartItemContainer>
      {cartProducts.map((item) => (
        <CartItem key={item.id}>
          <ItemImage src="/assets/icons/shopping-bag.png" alt={item.name} />
          <ItemDetails>
            <ItemName>{item.name.toUpperCase()}</ItemName>
            <ItemProperty>
              <span style={{ fontWeight: 'bold' }}>Year:</span> {item.year}
            </ItemProperty>
            <ItemProperty>
              <span style={{ fontWeight: 'bold' }}>Pantone:</span>{' '}
              {item.pantone_value}
            </ItemProperty>
          </ItemDetails>
        </CartItem>
      ))}
    </CartItemContainer>
  );
};

export default Cart;
