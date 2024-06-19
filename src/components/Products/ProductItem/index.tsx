import type { ReactElement } from 'react';
import React from 'react';

import type { IProduct } from '@/shared/Interfaces/Product.interface';

import {
  DetailLabel,
  IconButton,
  ProductContainer,
  ProductDetails,
  ProductInfo,
  ProductName,
  ProductTag,
} from './ProductItem.style';

interface ProductItemProps {
  product: IProduct;
  onAddToCart: (product: IProduct) => void;
  isDraggable?: boolean;
  handleDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    product: IProduct,
  ) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>, product: IProduct) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  onAddToCart,
  isDraggable = false,
  handleDragStart,
  handleDragOver,
  handleDrop,
}): ReactElement => {
  return (
    <ProductContainer
      id={`product${product.id}`}
      color={product.color}
      draggable={isDraggable}
      onDragStart={(e) => handleDragStart(e, product)}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, product)}
    >
      <ProductTag color={product.color} />
      <ProductDetails>
        <ProductName>{product.name.toUpperCase()}</ProductName>
        <ProductInfo>
          <DetailLabel>Year:</DetailLabel> {product.year}
        </ProductInfo>
        <ProductInfo>
          <DetailLabel>Pantone:</DetailLabel> {product.pantone_value}
        </ProductInfo>

        <div>
          <IconButton
            src="/assets/icons/add-to-cart.png"
            alt="Add to Cart"
            onClick={() => onAddToCart(product)}
          />
        </div>
      </ProductDetails>
    </ProductContainer>
  );
};

export default ProductItem;
