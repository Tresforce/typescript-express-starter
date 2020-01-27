import { NextFunction, Request, Response } from 'express';
import { Logger } from '../../utils';

const logger = Logger(module);
// FIXME update log requests
const logRequest = (req: Request, res: Response, next: NextFunction): void => {
  /**
   *  format the different types of request
   * ie queries, params, users etc..
   */
  const { method, url } = req;
  logger.info(`Logging ${method} request for ${url.split('dev')[1]}`);
  next();
};

export default logRequest;
