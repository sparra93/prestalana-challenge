import type { FormEvent, ReactElement } from 'react';
import { useState } from 'react';

import { signIn } from '@/services/auth';
import { EMAIL_NAME, TOKEN_NAME } from '@/shared/constants/sessionStorage';
import type { IAccount } from '@/shared/Interfaces/Account.interface';

import { LoginFormInput } from './login.constant';
import { getFormaData } from './login.helper';
import { Button, Container, Form, Input, Label, Logo } from './loginForm.style';

interface ILoginFormProps {}

const LoginForm: React.FC<ILoginFormProps> = (): ReactElement => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<boolean | void> => {
    event.preventDefault();
    sessionStorage.removeItem(TOKEN_NAME);
    sessionStorage.removeItem(EMAIL_NAME);
    const account: IAccount = getFormaData(event);
    if (!account.email || !account.password) return false;

    try {
      setLoading(true);
      const response = await signIn(account);
      if (response.ok) {
        window.location.href = '/Products/List';
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
    return true;
  };

  return (
    <Container>
      <Form onSubmit={onSubmit} data-testid="login-form">
        <Logo src="/assets/icons/user.png" alt="Login Logo" />
        <Label htmlFor={LoginFormInput.EMAIL.ID}>
          {LoginFormInput.EMAIL.LABEL}
        </Label>
        <Input
          type="text"
          id={LoginFormInput.EMAIL.NAME}
          name={LoginFormInput.EMAIL.NAME}
          required
        />
        <Label htmlFor={LoginFormInput.PASSWORD.ID}>
          {LoginFormInput.PASSWORD.LABEL}
        </Label>
        <Input
          type="password"
          id={LoginFormInput.PASSWORD.NAME}
          name={LoginFormInput.PASSWORD.NAME}
          required
        />
        <Button type="submit">{!loading ? 'Login' : 'Loading...'}</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
