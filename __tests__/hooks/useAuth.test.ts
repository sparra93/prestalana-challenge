// useAuth.test.tsx
import { renderHook } from '@testing-library/react';
import { useRouter } from 'next/navigation';

import { getFromSessionStorage } from '@/shared/helpers/storage';
import useAuth from '@/shared/hooks/useAuth';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../src/shared/helpers/storage', () => ({
  getFromSessionStorage: jest.fn(),
}));

describe('useAuth', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it('should redirect to login if no token or email in session storage', () => {
    (getFromSessionStorage as jest.Mock).mockReturnValueOnce(null);
    (getFromSessionStorage as jest.Mock).mockReturnValueOnce(null);

    renderHook(() => useAuth());

    expect(mockPush).toHaveBeenCalledWith('/login');
  });

  it('should set isAuthenticated to true if token and email are in session storage', () => {
    (getFromSessionStorage as jest.Mock).mockReturnValueOnce('some-token');
    (getFromSessionStorage as jest.Mock).mockReturnValueOnce('some-email');

    const { result } = renderHook(() => useAuth());

    expect(result.current).toBe(true);
    expect(mockPush).not.toHaveBeenCalled();
  });

  it('should redirect to a custom path if provided and no token or email in session storage', () => {
    (getFromSessionStorage as jest.Mock).mockReturnValueOnce(null);
    (getFromSessionStorage as jest.Mock).mockReturnValueOnce(null);

    renderHook(() => useAuth('/custom-path'));

    expect(mockPush).toHaveBeenCalledWith('/custom-path');
  });
});
