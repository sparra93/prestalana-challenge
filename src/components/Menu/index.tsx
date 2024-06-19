import Link from 'next/link';
import React from 'react';

import MenuItem from '@/components/Menu/MenuItem';

import { MenuContainer, MenuTitle, SubMenuContainer } from './Menu.style';

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuTitle>Opciones</MenuTitle>
      <SubMenuContainer>
        <MenuItem>
          <Link href="/Products/List" passHref data-testid="product-list-page">
            List
          </Link>
        </MenuItem>
      </SubMenuContainer>
      <SubMenuContainer>
        <MenuItem>
          <Link href="/Cart" passHref data-testid="cart-page">
            Cart
          </Link>
        </MenuItem>
      </SubMenuContainer>
    </MenuContainer>
  );
};

export default Menu;
