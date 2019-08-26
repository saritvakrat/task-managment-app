import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

//Module is declared using a TS decorator
@Module({ 
  imports:  [ 
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
  ],
})

export class AppModule { }
