import { TaskStatus } from '../task.modle';

export class GetTasksFilterDto {
    status: TaskStatus;
    search: string;
}