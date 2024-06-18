// index.test.ts
import * as Module from '@/components/Login';
import { getFormaData } from '@/components/Login/';
import { LoginFormInput } from '@/components/Login/login.constant';

describe('Module Exports', () => {
  it('should export LoginFormInput from login.constant', () => {
    expect(Module.LoginFormInput).toBe(LoginFormInput);
  });

  it('should export getFormaData from login.helper', () => {
    expect(Module.getFormaData).toBe(getFormaData);
  });
});
