import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

/**
 *Injectable defines the injectable class. This class can inject dependencies through 
 constructor. Those dependencies have to belong to the same module.
 *
 * @export
 * @class AuthService
 */
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private UserRepository:UserRepository
    ) {}
}
