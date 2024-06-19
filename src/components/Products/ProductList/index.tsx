import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Panel from '@/components/Panel';
import ProductItem from '@/components/Products/ProductItem';
import {
  addToCart,
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from '@/redux/features/productSlice';
import type { RootState } from '@/redux/store';
import { useFetchProducts } from '@/shared/hooks/useProducts';
import type { IProduct } from '@/shared/Interfaces/Product.interface';

import { ProductContainer } from './ProductList.style';

const ProductList: React.FC = () => {
  const { products, loadProducts } = useFetchProducts();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [dragItem, setDragItem] = useState<IProduct | null>(null);
  const [container, setContainer] = useState<number>();

  const productsFiltered = useSelector((state: RootState) => {
    const { yearFilter, nameFilter, colorFilter, pantoneFilter } = state.filter;
    return products
      .filter((product) =>
        yearFilter.some((year) => year.toString() === product.year.toString()),
      )
      .filter((product) =>
        product.name.toLowerCase().includes(nameFilter.toLowerCase()),
      )
      .filter((product) =>
        colorFilter.some(
          (color) => color.toString() === product.color.toString(),
        ),
      )
      .filter((product) =>
        pantoneFilter.some(
          (color) => color.toString() === product.pantone_value.toString(),
        ),
      );
  });

  const onAddToCart = (product: IProduct) => {
    dispatch(addToCart(product));
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    product: IProduct,
  ) => {
    setDragItem(product);
    setContainer(1);
  };

  const handleDragStartFavorites = (
    e: React.DragEvent<HTMLDivElement>,
    product: IProduct,
  ) => {
    setDragItem(product);
    setContainer(2);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): boolean => {
    e.preventDefault();
    if (!dragItem) return false;
    dispatch(addToFavorites(dragItem));

    return true;
  };

  const handleDropRemove = (e: React.DragEvent<HTMLDivElement>): boolean => {
    e.preventDefault();
    console.log('info');
    if (!dragItem || container === 1) return false;

    dispatch(removeFromFavorites(dragItem.id));

    return true;
  };

  useEffect(() => {
    loadProducts();
  });

  return (
    <ProductContainer>
      <Panel title="Productos" handleDrop={handleDropRemove} isDraggable>
        {productsFiltered.map((product: IProduct) => {
          return (
            <ProductItem
              onAddToCart={onAddToCart}
              key={product.id}
              product={product}
              isDraggable
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDropRemove}
            />
          );
        })}
      </Panel>
      <Panel title="Favorites" handleDrop={handleDrop} isDraggable>
        {favorites.map((product: IProduct) => {
          return (
            <ProductItem
              onAddToCart={onAddToCart}
              key={product.id}
              product={product}
              isDraggable
              handleDragStart={handleDragStartFavorites}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            />
          );
        })}
      </Panel>
    </ProductContainer>
  );
};

export default ProductList;
