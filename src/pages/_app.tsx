import '../app/globals.css';

import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import MainLayout from '@/components/Layout/MainLayout';
import Provider from '@/redux/Provider';

export default function App({
  Component,
  pageProps,
  router,
}: AppProps): ReactElement {
  const { pathname } = router;
  return (
    <Provider>
      {pathname === '/login' ? (
        <Component {...pageProps} />
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </Provider>
  );
}
