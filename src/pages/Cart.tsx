import type { NextPage } from 'next';
import React from 'react';

import Cart from '@/components/Cart';
import withAuth from '@/context/withAuth';

interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  return <Cart />;
};

export default withAuth(CartPage);
