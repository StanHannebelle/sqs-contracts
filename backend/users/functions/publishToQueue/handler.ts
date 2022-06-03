import { getLambdaHandler } from '@swarmion/serverless-contracts';
import SQS from 'aws-sdk/clients/sqs';

import { getEnvVariable } from '@sqs-contracts/serverless-helpers';
import { publishToQueueContract } from '@sqs-contracts/users-contracts';

const sqs = new SQS({});
const queueUrl = getEnvVariable('QUEUE_URL');

const handler = getLambdaHandler(publishToQueueContract)(async () => {
  const messageBody = 'Hello world';

  await sqs
    .sendMessage({
      MessageBody: messageBody,
      QueueUrl: queueUrl,
    })
    .promise();

  return { messageBody };
});

export const main = handler;
