import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

import ProductFilter from '@/components/Products/ProductFilter';
import { SidebarContainer } from '@/components/Sidebar/Sidebar.style';
import type { RootState } from '@/redux/store';

import Avatar from '../Avatar';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const route = useRouter();
  const isListPage = route.pathname === '/products/list';
  return (
    <SidebarContainer>
      <Avatar />
      {products.length && isListPage ? <ProductFilter /> : null}
    </SidebarContainer>
  );
};

export default Sidebar;
