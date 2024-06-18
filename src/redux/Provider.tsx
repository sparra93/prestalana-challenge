'use client';

import type { ReactElement } from 'react';
import { Provider as StoreProvider } from 'react-redux';

import store from '@/redux/store';

function Provider({ children }: { children: React.ReactNode }): ReactElement {
  return <StoreProvider store={store}>{children}</StoreProvider>;
}

export default Provider;
