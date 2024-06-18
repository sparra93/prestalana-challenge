import { getUrl } from '@/shared/helpers/path';

describe('getUrl function', () => {
  it('returns a valid URL with process.env.REMOTE_API_URL', () => {
    process.env.REMOTE_API_URL = 'https://example.com/api';

    const path = '/users';
    const result = getUrl(path);

    expect(result).toBe('https://example.com/api/users');
  });
});
