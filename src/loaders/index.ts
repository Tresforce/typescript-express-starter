import { Application } from 'express';
import { Logger } from '../utils';
import expressLoader from './express';
import databaseLoader from './pg';

const logger = Logger(module);

export default async ({
  expressApp
}: {
  expressApp: Application;
}): Promise<void> => {
  logger.info('Connecting to express...');
  expressLoader({ app: expressApp });

  logger.info('Connecting to database...');
  try {
    await databaseLoader();
  } catch (error) {
    logger.error(`Problem loading database: ${error}`);
    process.exit(1);
  }
};
