import styled from 'styled-components';

export const ToolbarContainer = styled.header`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  background: rgb(59, 92, 162);
  background: radial-gradient(
    circle,
    rgba(59, 92, 162, 1) 11%,
    rgba(59, 92, 162, 1) 100%,
    rgba(2, 0, 36, 0.8799894957983193) 100%
  );
`;

export const ToolbarTitle = styled.h1`
  color: #fff;
  font-size: 1.5em;
  margin: 0;
`;

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const CartIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const Badge = styled.div`
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  position: absolute;
  top: -5px;
  right: 0;
`;
