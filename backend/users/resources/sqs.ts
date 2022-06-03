export const Queue = {
  Type: 'AWS::SQS::Queue',
  Properties: {
    QueueName: '${self:service}-Queue-${self:provider.stage}',
    VisibilityTimeout: 60,
    MessageRetentionPeriod: 172800, // 2 days
    RedrivePolicy: {
      maxReceiveCount: 3, // Jobs will be retried 3 times
    },
  },
};
