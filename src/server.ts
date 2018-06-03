import * as Express from 'express';

const app = Express();

app.get(
  '/',
  (req: Express.Request, res: Express.Response) => {
      return res.send('Hello world');
  },
);

const port = 3000;

app.listen(
  port,
  () => {
      console.log(`Example app listening on port ${port}`);
  },
);

export default app;
