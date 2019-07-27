import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.modle';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPine } from './pipes/task-status-validation.pipe';

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
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {

        if (Object.keys(filterDto).length) {
            return this.tasksService.getTasksWithFilter(filterDto)
        } else {
            return this.tasksService.getAllTasks();
        }
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    CreateTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string): void {
        this.tasksService.deleteTaskById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status', TaskStatusValidationPine) status: TaskStatus
    ): Task {
        return this.tasksService.updateTaskStatus(id, status);
    }

}
