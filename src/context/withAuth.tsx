import type { ComponentType } from 'react';
import React, { useEffect } from 'react';

import { EMAIL_NAME } from '@/shared/constants/sessionStorage';
import { getFromSessionStorage } from '@/shared/helpers/storage';
import useAuth from '@/shared/hooks/useAuth';
import { useUser } from '@/shared/hooks/useUser';

interface WithAuthProps {
  redirectTo?: string;
}

const withAuth = <P extends object>(
  Component: ComponentType<P>,
  options?: WithAuthProps,
): React.FC<P> => {
  const { redirectTo = '/login' } = options || {};

  const AuthenticatedWrapper: React.FC<P> = (props) => {
    const isAuthenticated = useAuth(redirectTo);
    const { loadSessionInfo, userInfo } = useUser();
    useEffect(() => {
      if (window) {
        const email = getFromSessionStorage(EMAIL_NAME) || '';
        loadSessionInfo(email);
      }
    });

    return (
      <Component
        {...(props as P)}
        isAuthenticated={isAuthenticated}
        userInfo={userInfo}
      />
    );
  };

  return AuthenticatedWrapper;
};

export default withAuth;
