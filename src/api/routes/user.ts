import { Router } from 'express';

const route = Router();

export default (app: Router): void => {
  app.use('/users', route);

  route.get('/me', (req, res) => {
    return res.send('ok').status(200);
  });
};
