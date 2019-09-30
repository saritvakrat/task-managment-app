import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as config from 'config';

dotenv.config();

async function bootstrap() {
  const serverConfig = config.get('server');

  const logger = new Logger('bootstrap');
  let port = process.env.PORT || serverConfig.port;
  const app = await NestFactory.create(AppModule);

  await app.listen(port);
  logger.log(`Application is listening on port ${port}`);
}

bootstrap();
