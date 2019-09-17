import { BaseEntity,  Entity,  PrimaryGeneratedColumn,  Column,  Unique,  OneToMany} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Task } from '../tasks/task.entity';

/**
 *Entity is a class that maps to a database table 
 *
 * @export
 * @class User
 * @extends {BaseEntity}
 */
@Entity()
@Unique(['username'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    /**
     *One-to-many relation allows to create type of relation when 
     Entity2 can have multiple instances of Entity1. Entity1 have only 
     one Entity2. Entity1 is an owner of the relationship, and storages Entity2 id on its own side.
     Eager relations are always loaded automatically when relation's owner entity is loaded using find* methods. Only using QueryBuilder prevents loading eager relations. Eager flag cannot be set from both sides of relation - you can eager load only one side of the relationship.  
     * @type {Task[]}
     * @memberof User
     */
    @OneToMany(type => Task, task => task.user, {eager: true})
    tasks: Task[];

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}