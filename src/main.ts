import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import { PORT } from './constants';
require('dotenv').config();

async function main() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  app.use('/', express.static(join(__dirname, '..', 'public')));
  app.enableCors();
  // if (process.env.ADDRESS) {
  //   await app.listen(PORT, '0.0.0.0');
  // } else await app.listen(PORT);

  await app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on port ${PORT}`);
  });
}
main();
