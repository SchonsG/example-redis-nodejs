import 'dotenv/config';
import express from 'express';
import UserController from './app/constrollers/UserController';

const app = express();

app.use(express.json());

app.post('/users', UserController.store);

app.listen(3333, () => {
  console.log('server running on localhost:3333');
})