import type { ReactNode } from 'react';
import React from 'react';

import Menu from '@/components//Menu';
import {
  ChildrenContent,
  Content,
  LayoutContainer,
  MainContainer,
} from '@/components/Layout/MainLayout.style';
import Sidebar from '@/components/Sidebar';
import Toolbar from '@/components/Toolbar';

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
