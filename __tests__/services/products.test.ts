import fetchMock from 'jest-fetch-mock';

import { fetchProducts } from '@/services/products';

import { PRODUCT_MOCK } from '../../__mocks__/product.data';

fetchMock.enableMocks();

describe('fetchProducts', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetches products from API', async () => {
    process.env.REMOTE_API_URL = 'https://example.com/api';
    const mockProducts = PRODUCT_MOCK;

    fetchMock.mockResponseOnce(JSON.stringify(mockProducts), { status: 200 });

    const response = await fetchProducts();

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(mockProducts);
    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][1]?.method).toBe('GET');
  });
});
