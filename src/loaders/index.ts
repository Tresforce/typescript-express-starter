import { Application } from 'express';
import { Logger } from '../utils';
import expressLoader from './express';

const logger = Logger(module);

export default ({ expressApp }: { expressApp: Application }): void => {
  logger.info('Connecting to express...');
  expressLoader({ app: expressApp });
};
