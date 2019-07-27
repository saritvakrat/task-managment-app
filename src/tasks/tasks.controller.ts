import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.modle';
import { CreateTaskDto } from './dto/create-task.dto';

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

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTskById(id);
    }

    @Post()
    CreateTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    }
    
    @Delete('/:id')
    deleteTaskById(@Param('id') id: string): void {
        this.tasksService.deleteTaskById(id);
    }

}
