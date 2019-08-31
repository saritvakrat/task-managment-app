import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TaskStatus } from './tasks-status.enum';

/**
 *Entity is a class that maps to a database table 
 *
 * @export
 * @class Task
 * @extends {BaseEntity}
 */
@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
} 

