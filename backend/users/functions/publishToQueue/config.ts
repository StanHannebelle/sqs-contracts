import { getTrigger } from '@swarmion/serverless-contracts';

import {
  getHandlerPath,
  LambdaFunction,
} from '@sqs-contracts/serverless-helpers';
import { publishToQueueContract } from '@sqs-contracts/users-contracts';

import { getAttribute, ref } from 'helpers';
import { Queue } from 'resources/sqs';

const config: LambdaFunction = {
  environment: {
    QUEUE_URL: ref({ Queue }),
  },
  iamRoleStatements: [
    {
      Effect: 'Allow',
      Action: ['sqs:SendMessage', 'sqs:GetQueueUrl', 'sqs:ListQueues'],
      Resource: getAttribute({ Queue }, 'Arn'),
    },
  ],
  handler: getHandlerPath(__dirname),
  events: [getTrigger(publishToQueueContract)],
};

export default config;
