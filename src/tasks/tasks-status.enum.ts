/*  the module will define the shape of a task
interface -> enforces the shape of an object upon completion, after completion the interfaces are not preserved as interfaces any more
 Class ->already exists in JS, after after completion the classes are  preserved. Used for creating objects based on a blueprint and adding some self contained functionality using methods for example
 If you are not sure, start with creating an interface an than change to Class since it is easier. */

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

