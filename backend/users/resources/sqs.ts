export const Queue = {
  Type: 'AWS::SQS::Queue',
  Properties: {
    QueueName: '${self:service}-Queue-${self:provider.stage}',
    VisibilityTimeout: 60,
    MessageRetentionPeriod: 172800, // 2 days
  },
};
