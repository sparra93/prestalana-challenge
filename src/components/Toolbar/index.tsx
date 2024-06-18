import Link from 'next/link';
import { useSelector } from 'react-redux';

import {
  Badge,
  CartIcon,
  CartIconContainer,
  ToolbarContainer,
  ToolbarTitle,
} from '@/components/Toolbar/Toolbar.style';
import { selectCartCountTotal } from '@/redux/features/productSlice';

const Toolbar: React.FC = () => {
  const productCount = useSelector(selectCartCountTotal);

  return (
    <ToolbarContainer>
      <ToolbarTitle>My Personal Dashboard</ToolbarTitle>
      <Link href="/cart" passHref>
        <CartIconContainer>
          <CartIcon src="/assets/icons/shopping-bag.png" alt="Cart Icon" />
          <Badge>{productCount}</Badge>
        </CartIconContainer>
      </Link>
    </ToolbarContainer>
  );
};

export default Toolbar;
