/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REMOTE_API_URL: 'https://reqres.in/api',
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
