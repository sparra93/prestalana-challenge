import { screen } from '@testing-library/react';
import React from 'react';

import Menu from '@/components/Menu';

describe('Menu Component', () => {
  it('should display Menu information correctly', () => {
    renderWithProviders(<Menu />);
    expect(screen.getByTestId('product-list-page')).toHaveAttribute(
      'href',
      '/products/list',
    );
  });

  it('should have a <Link/> that redirect to /products/list page', () => {
    renderWithProviders(<Menu />);

    const link = screen.getByTestId('product-list-page');
    expect(link).toBeInTheDocument();
  });

  it('should have a <Link/> that redirect to /cart page', () => {
    renderWithProviders(<Menu />);

    const link = screen.getByTestId('cart-page');
    expect(link).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProviders(<Menu />);

    expect(asFragment()).toMatchSnapshot();
  });
});
