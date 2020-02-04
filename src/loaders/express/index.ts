import bodyParser from 'body-parser';
import cors from 'cors';
import { Application } from 'express';
import routes from '../../api';
import { notFoundError, sendError } from '../../api/middleware/errorHandling';
import logRequest from '../../api/middleware/logRequest';
import config from '../../config';

const { API_VERSION } = config.application;
const apiPrefix = `dev/${API_VERSION}`;

export default ({ app }: { app: Application }): void => {
  /**
   * Health Check endpoints
   */
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  // Log All requests
  app.use(logRequest);

  // Load API routes
  app.use(apiPrefix, routes());

  // catch 404 and forward to error handler
  app.use(notFoundError);
  app.use(sendError);
};
