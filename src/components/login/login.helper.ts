import type { FormEvent } from 'react';

import type { IAccount } from '@/shared/Interfaces/Account.interface';

import { LoginFormInput } from './login.constant';

export const getFormaData = (event: FormEvent<HTMLFormElement>): IAccount => {
  const {
    EMAIL: { NAME: emailName },
    PASSWORD: { NAME: passwordName },
  } = LoginFormInput;

  const formData: FormData = new FormData(event.currentTarget);
  const email = formData.get(emailName) as string;
  const password = formData.get(passwordName) as string;
  return { email, password };
};
