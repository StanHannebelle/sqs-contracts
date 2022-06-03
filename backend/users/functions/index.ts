import getUser from './getUser/config';
import publishToQueue from './publishToQueue/config';
import readFromQueue from './readFromQueue/config';

export const functions = { getUser, readFromQueue, publishToQueue };
