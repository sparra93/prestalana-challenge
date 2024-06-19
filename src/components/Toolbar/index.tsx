import Link from 'next/link';
import { useSelector } from 'react-redux';

import { selectCartCountTotal } from '@/redux/features/productSlice';

import {
  Badge,
  CartIcon,
  CartIconContainer,
  ToolbarContainer,
  ToolbarTitle,
} from './Toolbar.style';

const Toolbar: React.FC = () => {
  const productCount = useSelector(selectCartCountTotal);

  return (
    <ToolbarContainer>
      <ToolbarTitle>My Personal Dashboard</ToolbarTitle>
      <Link href="/Cart" passHref data-testid="go-to-cart">
        <CartIconContainer>
          <CartIcon src="/assets/icons/shopping-bag.png" alt="Cart Icon" />
          <Badge>{productCount}</Badge>
        </CartIconContainer>
      </Link>
    </ToolbarContainer>
  );
};

export default Toolbar;
