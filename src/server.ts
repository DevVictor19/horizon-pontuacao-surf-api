import http from 'http';

import 'reflect-metadata';
import dotenv from 'dotenv';

import { app } from './app';
import { AppDataSource } from './database/data-source';

dotenv.config();

const server = http.createServer(app);

const PORT = process.env.SERVER_PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    server.listen(+PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((reason) => {
    console.log(reason);
  });
