import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './tasks-status.enum';

/**
 * @export
 * @class TasksService
 */
@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) { }
    
    /**
     * @param {GetTasksFilterDto} filterDto
     * @memberof TasksService
     */
    async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
        return this.taskRepository.getTasks(filterDto)
    }
    
    /**
     * @param {number} id
     * @returns {Promise<Task>}
     * @memberof TasksService
     */
    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Oops! we could not find task with id ${id}`);
        }

        return found;
    }
    /**
     * @param {CreateTaskDto} createTaskDto
     * @returns {Promise<Task>}
     * @memberof TasksService
     */
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }
    /**
     * @param {number} id
     * @returns {Promise<void>}
     * @memberof TasksService
     */
    async deleteTaskById(id: number): Promise<void> {
        const deletedTask = await this.taskRepository.delete(id)

        if(deletedTask.affected === 0) {
            throw new NotFoundException(`Oops! we could not find task with id ${id}`);
        } 
    }
    /**
     * @param {number} id
     * @param {TaskStatus} status
     * @returns {Promise<Task>}
     * @memberof TasksService
     */
    async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
        const task = await this.getTaskById(id);
        task.status = status;
        await task.save();
        return task;
    }

}