import { SqsRecords } from 'types';

export const handler = ({ Records }: SqsRecords): void => {
  console.log(Records);
};

export const main = handler;
