import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  UseGuards,
  Logger
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { TaskStatus } from './tasks-status.enum';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.entity';
import { GetUser } from '../auth/get-user.decorator';

/**
 * Controllers are bound to a specific path for example /tasks for the task resource
 * the controllers contain handlers which handle endpoints and request methods (CRUD)
 * the decorator accepts a string which is the path to be handled by the controller
 * the handlers are simply methods withing the controller class, decorated with decorator such as @Get @Post ect
 * @export
 * @class TasksController
 */
@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  private logger = new Logger(`TasksController`);
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(
    @Query(ValidationPipe) filterDto: GetTasksFilterDto,
    @GetUser() user: User,
  ): Promise<Task[]> {
      this.logger.verbose(`User "${user.username}" retrieving all tasks. Filters applied ${JSON.stringify(filterDto)}`);
    return this.tasksService.getTasks(filterDto, user);
  }

  /**
   * @param {number} id
   * @returns {Promise<Task>}
   * @memberof TasksController
   */
  @Get('/:id')
  getTaskById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<Task> {
    this.logger.verbose(`User "${user.username}" retrieving a single task. Task ${id}`);
    return this.tasksService.getTaskById(id, user);
  }

  /**
   * @param {CreateTaskDto} createTaskDto
   * @returns {Promise<Task>}
   * @memberof TasksController
   */
  @Post()
  @UsePipes(ValidationPipe)
  CreateTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    this.logger.verbose(`User "${user.username}" creating a task. Task info ${JSON.stringify(createTaskDto)}`);
    return this.tasksService.createTask(createTaskDto, user);
  }

  /**
   * @param {number} id
   * @returns {Promise<void>}
   * @memberof TasksController
   */
  @Delete('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  deleteTaskById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    this.logger.verbose(`User "${user.username}" deleted a task. Task id ${id}`);
    return this.tasksService.deleteTaskById(id, user);
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
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    @GetUser() user: User,
  ): Promise<Task> {
    this.logger.verbose(`User "${user.username}" updates a task. Task id ${id}, ${status}`);
    return this.tasksService.updateTaskStatus(id, status, user);
  }
}
