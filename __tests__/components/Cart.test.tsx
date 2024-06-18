import React from 'react';

import Cart from '@/components/Cart';
import { productSliceInitialState } from '@/shared/constants/products';

describe('Cart Component', () => {
  const customState = {
    products: {
      ...productSliceInitialState,
      cart: [
        {
          id: 1,
          name: 'cerulean',
          year: 2000,
          color: '#98B2D1',
          pantone_value: '15-4020',
          quantity: 1,
        },
        {
          id: 2,
          name: 'fuchsia rose',
          year: 2001,
          color: '#C74375',
          pantone_value: '17-2031',
          quantity: 1,
        },
      ],
    },
  };

  it('matches snapshot', () => {
    const { asFragment } = renderWithProviders(<Cart />, customState);

    expect(asFragment()).toMatchSnapshot();
  });
});
