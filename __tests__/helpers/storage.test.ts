import {
  getFromLocalStorage,
  getFromSessionStorage,
  setLocalStorage,
  setSessionStorage,
} from '@/shared/helpers/storage';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
  Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
  });
});

describe('Storage Functions', () => {
  it('getFromLocalStorage should return value from localStorage', () => {
    const key = 'testKey';
    const expectedValue = 'testValue';

    localStorageMock.getItem.mockReturnValueOnce(expectedValue);

    const result = getFromLocalStorage(key);

    expect(localStorageMock.getItem).toHaveBeenCalledWith(key);
    expect(result).toBe(expectedValue);
  });

  it('setLocalStorage should set value in localStorage', () => {
    const key = 'testKey';
    const value = 'testValue';

    setLocalStorage(key, value);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(key, value);
  });

  it('getFromSessionStorage should return value from sessionStorage', () => {
    const key = 'testKey';
    const expectedValue = 'testValue';

    sessionStorageMock.getItem.mockReturnValueOnce(expectedValue);

    const result = getFromSessionStorage(key);

    expect(sessionStorageMock.getItem).toHaveBeenCalledWith(key);
    expect(result).toBe(expectedValue);
  });

  it('setSessionStorage should set value in sessionStorage', () => {
    const key = 'testKey';
    const value = 'testValue';

    setSessionStorage(key, value);

    expect(sessionStorageMock.setItem).toHaveBeenCalledWith(key, value);
  });
});
