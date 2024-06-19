import styled from 'styled-components';

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  background-color: #f5f5f5;
  &:hover {
    background-color: #eee;
  }
  color: black;
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 1rem;
`;

export const ItemDetails = styled.div`
  flex-grow: 1;
  font-size: 0.8em;
`;

export const ItemName = styled.span`
  font-weight: 400;
  margin-bottom: 5px;
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const ItemProperty = styled.p``;

export const ItemLabel = styled.span`
  font-weight: 200;
`;

export const IconButton = styled.img`
  width: 1.5rem;
  height: auto;
  padding: 10px;
`;

export const CountButton = styled.button`
  width: 1.5rem;
  margin: 5px;
`;
