import { screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';

import Layout from '@/components/Layout/MainLayout';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Layout Component', () => {
  beforeAll(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: '/',
      push: jest.fn(),
    }));
  });

  it('should display layout tree correctly', () => {
    renderWithProviders(
      <Layout>
        <div>Content</div>
      </Layout>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProviders(
      <Layout>
        <div>Content</div>
      </Layout>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
