import styled from 'styled-components';

export const CartItemContainer = styled.div`
  height: 100vh;
`;
export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  background-color: #f5f5f5;
  width: 300px;
  &:hover {
    background-color: #eee;
  }
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 1rem;
`;

export const ItemDetails = styled.div`
  flex-grow: 1;
`;

export const ItemName = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
`;

export const ItemProperty = styled.p`
  color: black;
`;
