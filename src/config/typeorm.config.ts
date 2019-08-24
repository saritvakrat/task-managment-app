import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrmConfig : TypeOrmModuleOptions = {

    type: 'postgres',
    host: 'localhost',
    port:  5432,
    password: 'postgres',
    username: 'postgres',
    database: 'taskmanagement',
    // This  will ensure that the file extensions used by TypeORM are both .js and .ts
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    //every time the connection start its gonna sync up with the postgress DB - should NOT be used in production
    synchronize: true,
};

