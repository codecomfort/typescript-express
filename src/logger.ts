import { RequestHandler } from 'express';

const logger: RequestHandler = (req, res, next) => {
  const ip =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    (req.socket && req.socket.remoteAddress) ||
    '0.0.0.0';
  const date = new Date().toISOString();

  console.log(
    `${ip} [${date}] "${req.method} ${req.url} - ${req.headers['user-agent']}"`
  );
  next();
};

export default logger;
