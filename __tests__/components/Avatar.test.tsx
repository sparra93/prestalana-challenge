import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import Avatar from '@/components/Avatar';
import { logout } from '@/redux/features/userSlice';
import { userSliceInitialState } from '@/shared/constants/user';

describe('Avatar Component', () => {
  const customState = {
    user: {
      ...userSliceInitialState,
      userInfo: {
        id: 7,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
      },
    },
  };

  it('should display user information correctly', () => {
    renderWithProviders(<Avatar />, customState);

    expect(screen.getByAltText('User Avatar')).toHaveAttribute(
      'src',
      'https://reqres.in/img/faces/7-image.jpg',
    );
    expect(screen.getByText('Michael')).toBeInTheDocument();
    expect(screen.getByText('michael.lawson@reqres.in')).toBeInTheDocument();
  });

  it('should call logout when the logout button is clicked', () => {
    const { store } = renderWithProviders(<Avatar />);

    const logoutButton = screen.getByText('Cerrar Sesión');
    fireEvent.click(logoutButton);

    const actions = store.getActions();
    expect(actions).toContainEqual(logout());
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProviders(<Avatar />, customState);

    expect(asFragment()).toMatchSnapshot();
  });
});
