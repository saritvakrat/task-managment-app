import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { TaskStatus } from './tasks-status.enum';
import { User } from '../auth/user.entity';

/**
 *Entity is a class that maps to a database table
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

  /**
     *Many-to-one relation allows to create type of relation when Entity1  
     can have single instance of Entity2, but Entity2 can have a multiple
     instances of Entity1. Entity1 is an owner of the relationship, and storages Entity2 id on its own side.
     * @type {User}
     * @memberof Task
  */
  @ManyToOne(type => User, user => user.tasks, { eager: false })
  user: User;

  @Column()
  userId: number;
}
