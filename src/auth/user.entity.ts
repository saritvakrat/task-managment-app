import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 *Entity is a class that maps to a database table 
 *
 * @export
 * @class User
 * @extends {BaseEntity}
 */
@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
}