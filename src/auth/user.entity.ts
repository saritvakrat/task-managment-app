import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

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
}