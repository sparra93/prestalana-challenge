import styled from 'styled-components';

export const ProductContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 2px 3px 6px rgba(9, 30, 66, 0.25);
  margin-bottom: 18px;
  padding: 30px 40px 30px 40px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.color || '#e1e1e1;'};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const ProductTag = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.color};
  height: 10px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const ProductDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductName = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

export const ProductInfo = styled.p`
  margin: 5px 0;
  font-size: 1em;
  color: #666;
`;

export const DetailLabel = styled.span`
  font-weight: bold;
  color: #333;
`;

export const IconButton = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  cursor: pointer;
`;
