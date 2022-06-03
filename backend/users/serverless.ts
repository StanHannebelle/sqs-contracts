import { AWS } from '@serverless/typescript';

import { httpApiResourceContract } from '@sqs-contracts/core-contracts';
import {
  frameworkVersion,
  projectName,
  sharedEsbuildConfig,
  sharedParams,
  sharedProviderConfig,
} from '@sqs-contracts/serverless-configuration';

import { functions } from './functions';
import { Resources } from './resources';

const serverlessConfiguration: AWS = {
  service: `${projectName}-users`, // Keep it short to have role name below 64
  frameworkVersion,
  configValidationMode: 'error',
  plugins: ['serverless-esbuild', 'serverless-iam-roles-per-function'],
  provider: {
    ...sharedProviderConfig,
    httpApi: {
      id: httpApiResourceContract.importValue,
    },
  },
  params: sharedParams,
  functions,
  package: { individually: true },
  custom: {
    projectName,
    esbuild: sharedEsbuildConfig,
  },
  resources: {
    Description: 'Users service: manage users',
    Resources,
  },
};

module.exports = serverlessConfiguration;
