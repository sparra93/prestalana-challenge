import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/redux//store';
import { getUserList } from '@/services/auth';
import { EMAIL_NAME, TOKEN_NAME } from '@/shared/constants/sessionStorage';
import { userSliceInitialState } from '@/shared/constants/user';
import type { IProduct } from '@/shared/Interfaces/Product.interface';
import type {
  IUserInfo,
  IUserListResponse,
} from '@/shared/Interfaces/User.interface';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (userEmail: string) => {
    const response = await getUserList();
    const userList: IUserListResponse = await response.json();
    const user = userList.data.find(({ email }) => email === userEmail);
    return user;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: userSliceInitialState,
  reducers: {
    logout() {
      sessionStorage.removeItem(TOKEN_NAME);
      sessionStorage.removeItem(EMAIL_NAME);
      window.location.href = '/login';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload || null;
        state.loaded = true;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { logout } = userSlice.actions;
export const selectFavorites = (state: RootState): IProduct[] =>
  state.user.favorites;
export const selectCart = (state: RootState): IUserInfo | null =>
  state.user.userInfo;

export default userSlice.reducer;
