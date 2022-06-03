import { FromSchema } from 'json-schema-to-ts';

export const sqsRecordSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'string',
    },
  },
  additionalProperties: true,
  required: ['body'],
} as const;

export const sqsRecordsSchema = {
  type: 'object',
  properties: {
    Records: {
      type: 'array',
      items: sqsRecordSchema,
    },
  },
  required: ['Records'],
} as const;

export type SqsRecords = FromSchema<typeof sqsRecordsSchema>;
