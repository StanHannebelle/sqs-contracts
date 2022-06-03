import { jestConfig } from '@sqs-contracts/configuration';

export default {
  ...jestConfig,
  moduleDirectories: ['node_modules', '<rootDir>'],
};
