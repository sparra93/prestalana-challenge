import type { ReactNode } from 'react';
import React from 'react';

import Menu from '@/components//Menu';
import Toolbar from '@/components/Toolbar';

import Sidebar from '../SideBar';
import {
  ChildrenContent,
  Content,
  LayoutContainer,
  MainContainer,
} from './MainLayout.style';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Toolbar />
      <MainContainer>
        <Sidebar />
        <Content>
          <Menu />
          <ChildrenContent>{children}</ChildrenContent>
        </Content>
      </MainContainer>
    </LayoutContainer>
  );
};

export default MainLayout;
