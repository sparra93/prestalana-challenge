import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '@/redux/features/userSlice';
import type { AppDispatch, RootState } from '@/redux/store';

import type { IUserInfo } from '../Interfaces/User.interface';

export interface IUseProducts {
  userInfo: IUserInfo | null;
  loading: boolean;
  error: boolean;
  loadSessionInfo: (email: string) => void;
}

export const useUser = (): IUseProducts => {
  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);
  const loaded = useSelector((state: RootState) => state.user.loaded);

  const loadSessionInfo = (email: string): void => {
    if (!loaded) {
      dispatch(getUser(email));
    }
  };

  return { userInfo, loading, error, loadSessionInfo };
};
