import type { ReactNode } from 'react';

import { Item } from './MenuItem.style';

interface MenuItemProps {
  children: ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ children }) => {
  return <Item>{children}</Item>;
};

export default MenuItem;
