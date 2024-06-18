import type { IUserSliceInitialState } from '../Interfaces/User.interface';

export const userSliceInitialState: IUserSliceInitialState = {
  userInfo: null,
  error: false,
  loading: false,
  loaded: false,
  favorites: [],
};
