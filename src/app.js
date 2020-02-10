import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import errorHandler from './middleware/errorHandler';
import routes from './routes';

dotenv.config();

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (['development', 'staging', 'production'].includes(process.env.NODE_ENV)) {
  app.use(morgan('dev'));
}

app.use(routes);

app.get('/', (_, res) => {
  res.status(200).json({
    status: 'success',
    message: 'welcome to Ticket',
  });
});

app.all('*', (_, res) => {
  res.status(404).json({
    status: 'error',
    error: 'resource not found',
  });
});

app.use(errorHandler);

export default app;
