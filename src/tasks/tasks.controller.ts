import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'dist/tasks/task.modle';

/**
 * Controllers are bound to a a specific path for example /tasks for the task resource
 * the controllers contain handlers which handle endpoints and request methods (CRUD)
 * the decorator accepts a string which is the path to be handled by the controller
 * the handlers are simply methods withing the controller class, decorated with decorator such as @Get @Post ect
 */
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }
}
