import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

import ProductFilter from '@/components/Products/ProductFilter';
import type { RootState } from '@/redux/store';

import Avatar from '../Avatar';
import { SidebarContainer } from './Sidebar.style';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const route = useRouter();
  const isListPage = route.pathname === '/Products/List';
  return (
    <SidebarContainer>
      <Avatar />
      {products.length && isListPage ? <ProductFilter /> : null}
    </SidebarContainer>
  );
};

export default Sidebar;
