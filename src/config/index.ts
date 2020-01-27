import { Logger } from '../utils';
import application from './application';
import database from './database';

const logger = Logger(module);

const config = {
  ...application,
  ...database
};

logger.info('checking environment variables...');
Object.entries(config).forEach(environmentVariable => {
  const [key, value] = environmentVariable;
  if (value === undefined || value === '' || value === null) {
    const missingVariable = `Environment variable ${key} must be defined!`;
    logger.error(missingVariable);
    if (process.env.NODE_ENV === 'development') {
      process.exit(1);
    }
  }
});

export default { application, database };
