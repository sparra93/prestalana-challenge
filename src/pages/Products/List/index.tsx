import type { NextPage } from 'next';

import ProductList from '@/components/Products/ProductList';
import withAuth from '@/context/withAuth';

interface ProductListProps {}

const ProductListPage: NextPage<ProductListProps> = () => {
  return <ProductList />;
};

export default withAuth(ProductListPage);
