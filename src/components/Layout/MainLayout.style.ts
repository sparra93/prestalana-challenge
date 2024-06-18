import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(81, 121, 213);
  background: radial-gradient(
    circle,
    rgba(81, 121, 213, 1) 11%,
    rgba(81, 121, 213, 1) 100%,
    rgba(2, 0, 36, 0.8799894957983193) 100%
  );
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
`;
export const ChildrenContent = styled.div`
  flex: 1;
  padding: 20px;
`;
