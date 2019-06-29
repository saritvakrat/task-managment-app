import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

//Module is declared using a TS decorator
@Module({
  imports: [TasksModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule { }
