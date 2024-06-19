import styled from 'styled-components';

export const PanelContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #e8e8e8e0;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;

export const PanelHeader = styled.div`
  padding: 12px;
  background-color: #e8e8e8e0;
  border-bottom: 1px solid #ddd;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-size: 1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #000;
`;

export const PanelBody = styled.div`
  padding: 16px;
`;
