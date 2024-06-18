import type { NextPage } from 'next';

import withAuth from '@/context/withAuth';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  return null;
};

export default withAuth(HomePage);
