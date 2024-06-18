import Link from 'next/link';
import React from 'react';

import {
  MenuContainer,
  MenuTitle,
  SubMenuContainer,
} from '@/components/Menu/Menu.style';
import MenuItem from '@/components/Menu/MenuItem';

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuTitle>Opciones</MenuTitle>
      <SubMenuContainer>
        <MenuItem>
          <Link href="/products/list" passHref data-testid="product-list-page">
            List
          </Link>
        </MenuItem>
      </SubMenuContainer>
      <SubMenuContainer>
        <MenuItem>
          <Link href="/cart" passHref data-testid="cart-page">
            Cart
          </Link>
        </MenuItem>
      </SubMenuContainer>
    </MenuContainer>
  );
};

export default Menu;
