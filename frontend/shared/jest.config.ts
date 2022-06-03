import type { Config } from '@jest/types';

import { jestConfig } from '@sqs-contracts/configuration';

const config: Config.InitialOptions = {
  ...jestConfig,
  testEnvironment: 'jsdom',
  setupFiles: ['dotenv-flow/config'],
  setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.ts'],
};

export default config;
