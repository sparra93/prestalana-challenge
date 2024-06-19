import type { ReactElement } from 'react';
import React from 'react';

import type { IProduct } from '@/shared/Interfaces/Product.interface';

import ProductCard from '../ProductCard';
import { ProductContainer, ProductTag } from './ProductItem.style';

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
  const onClickAddButton = (
    event: React.MouseEvent<HTMLImageElement>,
    productItem: IProduct,
  ) => {
    onAddToCart(productItem);
  };
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
      <ProductCard
        key={product.id}
        product={product}
        showAddCart
        handleAddCart={(event) => {
          onClickAddButton(event, product);
        }}
      />
    </ProductContainer>
  );
};

export default ProductItem;
