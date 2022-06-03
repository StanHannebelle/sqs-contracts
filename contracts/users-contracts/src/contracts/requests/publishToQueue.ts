import { ApiGatewayContract } from '@swarmion/serverless-contracts';

const outputSchema = {
  type: 'object',
  properties: {
    messageBody: { type: 'string' },
  },
  required: ['messageBody'],
  additionalProperties: false,
} as const;

export const publishToQueueContract = new ApiGatewayContract({
  id: 'users-publishToQueue',
  path: '/users/publish-to-queue',
  method: 'POST',
  integrationType: 'httpApi',
  pathParametersSchema: undefined,
  queryStringParametersSchema: undefined,
  bodySchema: undefined,
  headersSchema: undefined,
  outputSchema,
});
