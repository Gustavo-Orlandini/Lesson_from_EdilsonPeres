import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  errorOnDeprecated: true,
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  // sandboxInjectedGlobals: ['Math'],
};

export default config;
