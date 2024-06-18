import Link from 'next/link';
import React from 'react';

import { MenuContainer, SubMenuContainer } from '@/components/Menu/Menu.style';
import MenuItem from '@/components/Menu/MenuItem';

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuItem>Products</MenuItem>
      <SubMenuContainer>
        <Link href="/products/list" passHref data-testid="product-list-page">
          <MenuItem>List</MenuItem>
        </Link>
      </SubMenuContainer>
      <SubMenuContainer>
        <Link href="/cart" passHref data-testid="cart-page">
          <MenuItem>Cart</MenuItem>
        </Link>
      </SubMenuContainer>
    </MenuContainer>
  );
};

export default Menu;
