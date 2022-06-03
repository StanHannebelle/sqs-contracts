import { getTrigger } from '@swarmion/serverless-contracts';

import {
  getHandlerPath,
  LambdaFunction,
} from '@sqs-contracts/serverless-helpers';
import { getUserContract } from '@sqs-contracts/users-contracts';

const config: LambdaFunction = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [getTrigger(getUserContract)],
};

export default config;
