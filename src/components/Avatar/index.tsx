import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '@/redux/features/userSlice';
import type { RootState } from '@/redux/store';

import {
  AvatarImg,
  LogoutButton,
  UserEmail,
  UserInfo,
  UserName,
  UserSection,
} from './Avatar.style';

interface AvatarProps {}

const Avatar: React.FC<AvatarProps> = () => {
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const dispatch = useDispatch();
  const onClickLogout = () => {
    dispatch(logout());
  };
  return (
    <UserSection>
      <AvatarImg src={userInfo?.avatar} alt="User Avatar" />
      <UserInfo>
        <UserName>{userInfo?.first_name}</UserName>
        <UserEmail>{userInfo?.email}</UserEmail>
        <LogoutButton onClick={onClickLogout}>Cerrar Sesión</LogoutButton>
      </UserInfo>
    </UserSection>
  );
};

export default Avatar;
