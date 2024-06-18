export interface IUserResponse {
  data: IUser;
  support: ISupport;
}

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ISupport {
  url: string;
  text: string;
}

export interface IUserListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUserInfo[];
  support: ISupport;
}

export interface IUserInfo extends IUser {
  avatar: string;
}
