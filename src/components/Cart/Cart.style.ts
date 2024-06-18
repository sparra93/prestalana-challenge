import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 400px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
`;

export const CartTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItemName = styled.span`
  font-size: 1.2em;
  color: #333;
`;

export const CartItemInfo = styled.span`
  font-size: 1em;
  color: #666;
`;

export const CartItemPrice = styled.span`
  font-size: 1.2em;
  color: #333;
`;

export const TotalPrice = styled.div`
  font-size: 1.5em;
  color: #333;
  text-align: center;
  margin-top: 20px;
`;
