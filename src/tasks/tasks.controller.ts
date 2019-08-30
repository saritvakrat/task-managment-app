import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { TaskStatus } from './tasks-status.enum';

/**
 * Controllers are bound to a a specific path for example /tasks for the task resource
 * the controllers contain handlers which handle endpoints and request methods (CRUD)
 * the decorator accepts a string which is the path to be handled by the controller
 * the handlers are simply methods withing the controller class, decorated with decorator such as @Get @Post ect
 * @export
 * @class TasksController
 */
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto) {
        return this.tasksService.getTasks(filterDto);
    }

    /**
     * @param {number} id
     * @returns {Promise<Task>}
     * @memberof TasksController
     */
    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    /**
     * @param {CreateTaskDto} createTaskDto
     * @returns {Promise<Task>}
     * @memberof TasksController
     */
    @Post()
    @UsePipes(ValidationPipe)
    CreateTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    /**
     * @param {number} id
     * @returns {Promise<void>}
     * @memberof TasksController
     */
    @Delete('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    deleteTaskById(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.tasksService.deleteTaskById(id);
    }

    /**
     * @param {number} id
     * @param {TaskStatus} status
     * @returns {Promise<Task>}
     * @memberof TasksController
     */
    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus
    ): Promise<Task> {
        return this.tasksService.updateTaskStatus(id, status);
    }

}
