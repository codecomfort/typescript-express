import { Router } from 'express';

const userRouter = Router();

// middleware
userRouter.use((req, res, next) => {
  console.log(`[userRouter] ${new Date().toISOString()}`);
  next();
});

userRouter.get('/', (req, res) => {
  res.send('/user/');
});

userRouter.get('/about', (req, res) => {
  res.send('/user/about');
});

userRouter.get('/:id', (req, res) => {
  res.status(200).send(`user: ${req.params.id}`);
});

export default userRouter;
