import { Application } from 'express';
import { Logger } from '../utils';
import Database from './database';
import expressLoader from './express';

const logger = Logger(module);

export default async ({
  expressApp
}: {
  expressApp: Application;
}): Promise<void> => {
  logger.info('Connecting to express...');
  expressLoader({ app: expressApp });
  logger.info('express connected...');
  logger.info('Connecting to database...');
  try {
    await new Database().establishConnection();
    logger.info('database connection established...');
  } catch (error) {
    logger.error(`Problem loading database: ${error}`);
    process.exit(1);
  }
};
