import React from 'react';

import type { ICartProduct } from '@/shared/Interfaces/Product.interface';

import {
  CartItem,
  CountButton,
  IconButton,
  ItemDetails,
  ItemImage,
  ItemLabel,
  ItemName,
  ItemProperty,
} from './ProductCard.style';

interface ProductCardProps {
  product: ICartProduct;
  showRemove?: boolean;
  showFavorites?: boolean;
  showAddCart?: boolean;
  showQuantities?: boolean;
  isFavorite?: boolean;
  handleRemoveCart?: (e: React.MouseEvent<HTMLImageElement>) => void;
  handleAddCart?: (e: React.MouseEvent<HTMLImageElement>) => void;
  handleDecreaseQuantity?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleIncreaseQuantity?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showRemove,
  showFavorites,
  showAddCart,
  showQuantities,
  isFavorite,
  handleRemoveCart,
  handleAddCart,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}) => {
  const favoriteImg = isFavorite
    ? '/assets/icons/in.png'
    : '/assets/icons/out.png';
  return (
    <CartItem>
      {showRemove && handleRemoveCart ? (
        <IconButton
          onClick={(event) => {
            handleRemoveCart(event);
          }}
          src="/assets/icons/remove.png"
          alt="Remove from cart"
        />
      ) : null}
      {showAddCart && handleAddCart ? (
        <IconButton
          onClick={(event) => {
            handleAddCart(event);
          }}
          src="/assets/icons/plus.png"
          alt="Add from cart"
        />
      ) : null}
      {showFavorites ? (
        <IconButton src={favoriteImg} alt="Add to favorites" />
      ) : null}
      <ItemImage src="/assets/icons/shopping-bag.png" alt={product.name} />
      <ItemDetails>
        <ItemName>{product.name}</ItemName>
        <ItemProperty>
          <ItemLabel>Year:</ItemLabel> {product.year}
        </ItemProperty>
        <ItemProperty>
          <ItemLabel>Pantone:</ItemLabel> {product.pantone_value}
        </ItemProperty>
      </ItemDetails>
      {showQuantities && handleDecreaseQuantity && handleIncreaseQuantity ? (
        <>
          <CountButton
            onClick={(event) => {
              handleDecreaseQuantity(event);
            }}
          >
            -
          </CountButton>
          {product.quantity}
          <CountButton
            onClick={(event) => {
              handleIncreaseQuantity(event);
            }}
          >
            +
          </CountButton>
        </>
      ) : null}
    </CartItem>
  );
};

export default ProductCard;
