import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { EMAIL_NAME, TOKEN_NAME } from '../constants/sessionStorage';
import { getFromSessionStorage } from '../helpers/storage';

const useAuth = (redirectTo = '/login'): boolean => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    /**
     * For now, we'll use only this validation, you can refresh an validate the token in the future. We're going to do that only for example
     */
    const token = getFromSessionStorage(TOKEN_NAME) || false;
    const email = getFromSessionStorage(EMAIL_NAME) || false;

    if (!token || !email) {
      router.push(redirectTo);
    } else {
      setIsAuthenticated(true);
    }
  }, [router, redirectTo]);

  return isAuthenticated;
};

export default useAuth;
