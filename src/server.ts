import * as Express from 'express';
import logger from './logger';

const app = Express();
app.use(logger);

app.get('/home/index', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('Hello world');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
