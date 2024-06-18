import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import React from 'react';

import LoginPage from '@/pages/login';

jest.mock(
  '../../src/context/withAuth',
  () =>
    <P extends object>(Component: React.FC<P>) => {
      const newComponent: React.FC<P> = (props) => (
        <Component {...(props as P)} />
      );
      return newComponent;
    },
);

// Mock de useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('LoginPage', () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should redirect to /products/list if user is authenticated', () => {
    render(<LoginPage isAuthenticated />);

    expect(push).toHaveBeenCalledWith('/products/list');
  });

  it('should render the LoginForm if the user is not authenticated', () => {
    render(<LoginPage isAuthenticated={false} />);

    expect(push).not.toHaveBeenCalled();
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });
});
