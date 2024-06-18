import { screen } from '@testing-library/react';
import React from 'react';

import Toolbar from '@/components/Toolbar';

describe('Toolbar Component', () => {
  it('should display toolbar information correctly', () => {
    renderWithProviders(<Toolbar />);
    expect(screen.getByAltText('Cart Icon')).toHaveAttribute(
      'src',
      '/assets/icons/shopping-bag.png',
    );
  });

  it('should have a icon bag that redirect to /cart page', () => {
    renderWithProviders(<Toolbar />);

    const link = screen.getByTestId('go-to-cart');
    expect(link).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProviders(<Toolbar />);

    expect(asFragment()).toMatchSnapshot();
  });
});
