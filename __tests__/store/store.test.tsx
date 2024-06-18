// __tests__/store.test.ts

import filterReducers from '@/redux/features/filterSlice';
import productsReducers from '@/redux/features/productSlice';
import userReducers from '@/redux/features/userSlice';
import store from '@/redux/store';

describe('Redux Store', () => {
  it('should have the initial reducers configured correctly', () => {
    const state = store.getState();

    expect(state).toHaveProperty('products');
    expect(state).toHaveProperty('filter');
    expect(state).toHaveProperty('user');

    expect(state.products).toEqual(
      productsReducers(undefined, { type: '@@INIT' }),
    );
    expect(state.filter).toEqual(filterReducers(undefined, { type: '@@INIT' }));
    expect(state.user).toEqual(userReducers(undefined, { type: '@@INIT' }));
  });
});
