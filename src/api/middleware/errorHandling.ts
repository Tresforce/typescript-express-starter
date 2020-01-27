import { NextFunction, Request, Response } from 'express';
import { Logger } from '../../utils';
import UsefulError from '../../utils/error/Error';

const logger = Logger(module);
// catch 404 and forward to error handler
export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error = new UsefulError('NotFoundError', 404, 'Not Found');
  next(error);
};

export const sendError = (
  err: UsefulError,
  req: Request,
  res: Response
): Response => {
  logger.error('Error %o', err);
  res.status(err.status);
  return res.json({
    errors: {
      message: err.message
    }
  });
};
