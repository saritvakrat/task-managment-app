import { TaskStatus } from '../tasks-status.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn(Object.values(TaskStatus))
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty() 
    search: string;
    management
}