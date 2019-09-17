import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const logger = new Logger('bootstrap');
  let port = process.env.PORT ? process.env.PORT : 3000;

  const app = await NestFactory.create(AppModule);

  await app.listen(port);
  logger.log(`Application is listening on port ${port}`);
}

bootstrap();
