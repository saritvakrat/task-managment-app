import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  username: process.env.RDS_USERNAME || dbConfig.username,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  // This  will ensure that the file extensions used by TypeORM are both .js and .ts
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // every time the connection start its gonna sync up with the postgress DB - should NOT be used in production
 // Its recommended to set to true on first prod deployment - to save us the sync, then re deploy with 'false'
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
};