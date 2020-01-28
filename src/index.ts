/* eslint-disable import/first */
require('dotenv').config();

// We need to load environment variables first
import express from 'express';
import config from './config';
import { Logger } from './utils';

const logger = Logger(module);
const { APP_PORT } = config.application;

async function startServer(): Promise<void> {
  const app = express();
  logger.info(`Node env is ${process.env.NODE_ENV}`);
  try {
    // eslint-disable-next-line global-require
    await require('./loaders').default({ expressApp: app });
  } catch (error) {
    logger.error(`Error loading application: ${error}`);
    process.exit(1);
  }

  app.listen(APP_PORT, () => {
    logger.info(`
      ################################################
      🛡️  Server listening on port: ${APP_PORT} 🛡️ 
      ################################################
    `);
  });
}

startServer().catch(error => {
  logger.error(error);
});
