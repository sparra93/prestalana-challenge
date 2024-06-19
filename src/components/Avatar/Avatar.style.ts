import styled from 'styled-components';

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #dddddd59;
`;

export const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 200;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 1em;
  font-weight: 700;
`;

export const UserEmail = styled.span`
  font-size: 0.9em;
`;

export const LogoutButton = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #ff1a1a;
  }
`;
