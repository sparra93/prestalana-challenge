import { ENDPOINT_URL, getUrl } from '@/shared/helpers/path';

export async function fetchProducts(): Promise<Response> {
  const getAllProductUrl = getUrl(ENDPOINT_URL.PRODUCT.ALL);

  const response = await fetch(getAllProductUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
}
