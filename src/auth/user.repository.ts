import { Repository, EntityRepository } from "typeorm";
import { User } from './user.entity';

/**
 *EntityRepository is used to declare a class as a custom repository.
  Custom repository can manage some specific entity 
  or just be generic. Custom repository optionally can extend 
  AbstractRepository, Repository or TreeRepository.
 *
 * @export
 * @class UserRepository
 * @extends {Repository<User>}
 */
@EntityRepository(User)
export class UserRepository extends Repository<User>{

}