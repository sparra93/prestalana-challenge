import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/__tests__/**',
    '!**/?(*.)+(spec|test).[jt]s?(x)',
    '!src/**/*.style.{js,jsx,ts,tsx}',
    '!src/**/*.interface.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      lines: 50,
      statements: 50,
      branches: 50,
      functions: 50,
    },
  },

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/jest.global.tsx'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(config);
