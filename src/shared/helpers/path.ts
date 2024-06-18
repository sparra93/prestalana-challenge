export const ENDPOINT_URL = {
  LOGIN: {
    SIGIN: '/login',
    GETLIST: '/users?page=1&per_page=20',
    GETUSER: '/users/',
  },
  PRODUCT: {
    ALL: '/unknown?page=1&per_page=20',
  },
};

export function getUrl(path: string): string {
  return `${process.env.REMOTE_API_URL}${path}`;
}
