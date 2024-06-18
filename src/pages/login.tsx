import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React from 'react';

import LoginForm from '@/components/Login/LoginForm';
import withAuth from '@/context/withAuth';

interface LoginPageProps {
  isAuthenticated: boolean;
}

const LoginPage: NextPage<LoginPageProps> = ({ isAuthenticated }) => {
  const router = useRouter();

  if (isAuthenticated) router.push('/products/list');

  return <LoginForm />;
};

export default withAuth(LoginPage);
