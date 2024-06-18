import { EMAIL_NAME, TOKEN_NAME } from '@/shared/constants/sessionStorage';
import { ENDPOINT_URL, getUrl } from '@/shared/helpers/path';
import { setSessionStorage } from '@/shared/helpers/storage';
import type { IAccount } from '@/shared/Interfaces/Account.interface';

export async function signIn(account: IAccount): Promise<Response> {
  const siginUrl = getUrl(ENDPOINT_URL.LOGIN.SIGIN);

  const response = await fetch(siginUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(account),
  });
  const { token } = await response.json();
  setSessionStorage(TOKEN_NAME, token);
  setSessionStorage(EMAIL_NAME, account.email);
  return response;
}

export async function getUserList(): Promise<Response> {
  const getUserListUrl = getUrl(ENDPOINT_URL.LOGIN.GETLIST);

  const response = await fetch(getUserListUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
}

export async function getUser(id: number): Promise<Response> {
  const getUserUrl = getUrl(`${ENDPOINT_URL.LOGIN.GETUSER}/${id}`);

  const response = await fetch(getUserUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
}
