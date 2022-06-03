import {
  getHandlerPath,
  LambdaFunction,
} from '@sqs-contracts/serverless-helpers';

import { getAttribute } from 'helpers';
import { Queue } from 'resources/sqs';

const config: LambdaFunction = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [
    {
      sqs: {
        arn: getAttribute({ Queue }, 'Arn'),
        batchSize: 1,
      },
    },
  ],
};

export default config;
