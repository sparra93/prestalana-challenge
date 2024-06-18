import { LoginFormInput } from '@/components/Login/login.constant';

describe('LoginFormInput', () => {
  it('should have the correct structure and values for EMAIL', () => {
    expect(LoginFormInput.EMAIL).toEqual({
      NAME: 'email',
      ID: 'email',
      LABEL: 'Email',
    });
  });

  it('should have the correct structure and values for PASSWORD', () => {
    expect(LoginFormInput.PASSWORD).toEqual({
      NAME: 'password',
      ID: 'password',
      LABEL: 'Password',
    });
  });
});
