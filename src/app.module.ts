import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';

//Module is declared using a TS decorator
@Module({
  imports: [TasksModule],
  controllers: [TasksController],

})
export class AppModule { }
