import { Repository, EntityRepository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './tasks-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { User } from '../auth/user.entity';

/**
 * Creating a repository allows for a place to contain our database-interaction related logic. 
 * This way, we can keep our services cleaner. Service will still be able to handle business logic 
 * but database-related logic will be handled by the repository.
 * @export
 * @class TaskRepository
 * @extends {Repository<Task>}
 */
@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    /**
     * @param {GetTasksFilterDto} filterDto
     * @returns {Promise<Task[]>}
     * @memberof TaskRepository
     */
    async getTasks(
        filterDto: GetTasksFilterDto, 
        user: User,
        ): Promise<Task[]> {
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('task');

        query.where('task.userId = :userId', {userId: user.id});

        if (status) {
            query.andWhere('task.status = :status', { status });
        }

        if (search) {
            query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', { search: `%${search}%` });
        }

        const tasks = await query.getMany();
        return tasks;
    }

    /**
     * @param {CreateTaskDto} createTaskDto
     * @returns {Promise<Task>}
     * @memberof TaskRepository
     */
    async createTask(
        createTaskDto: CreateTaskDto, 
        user: User,
        ): Promise<Task> {
        const { title, description } = createTaskDto;

        const task = new Task();
        task.title = title;
        task.description = description;
        task.status = TaskStatus.OPEN;
        task.user = user;
        await task.save();

        delete task.user;

        return task;
    }

}
