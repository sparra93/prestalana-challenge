import * as constantModule from '@/components/login/login.constant';
import { LoginFormInput } from '@/components/login/login.constant';
import * as helperModule from '@/components/login/login.helper';
import { getFormaData } from '@/components/login/login.helper';

describe('Module Exports', () => {
  it('should export LoginFormInput from login.constant', () => {
    expect(constantModule.LoginFormInput).toBe(LoginFormInput);
  });

  it('should export getFormaData from login.helper', () => {
    expect(helperModule.getFormaData).toBe(getFormaData);
  });
});
