import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import type React from 'react';
import { Provider } from 'react-redux';
import type { MockStoreEnhanced } from 'redux-mock-store';
import configureMockStore from 'redux-mock-store';

import type { RootState } from '@/redux/store';
import { filterSliceInitialState } from '@/shared/constants/filter';
import { productSliceInitialState } from '@/shared/constants/products';
import { userSliceInitialState } from '@/shared/constants/user';

const mockStore = configureMockStore();
const mockInitialState: RootState = {
  user: {
    ...userSliceInitialState,
  },
  products: {
    ...productSliceInitialState,
  },
  filter: {
    ...filterSliceInitialState,
  },
};

declare global {
  function renderWithProviders(
    children: React.ReactElement,
    state?: Partial<RootState>,
  ): RenderResult & { store: MockStoreEnhanced };
}

global.renderWithProviders = (
  children: React.ReactElement,
  state: Partial<RootState> = {},
) => {
  const store = mockStore({ ...mockInitialState, ...state });
  return {
    ...render(<Provider store={store}>{children}</Provider>),
    store,
  };
};
