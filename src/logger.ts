import { RequestHandler } from 'express';

const logger: RequestHandler = (req, res, next) => {
  console.log('output from logger');
  next();
};

export default logger;
