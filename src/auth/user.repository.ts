import { Repository, EntityRepository, Brackets } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

/**
 *EntityRepository is used to declare a class as a custom repository.
  Custom repository can manage some specific entity 
  or just be generic. Custom repository optionally can extend 
  AbstractRepository, Repository or TreeRepository.
 * @export
 * @class UserRepository
 * @extends {Repository<User>}
 */
@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  /**
   * @param {AuthCredentialsDto} authCredentialsDto
   * @returns {Promise<void>}
   * @memberof UserRepository
   */
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      // 23505 == duplicate username db error
      if (error.code === '23505') {
        throw new ConflictException('Username already in use!');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({ username });

    if (user && (await user.validatePassword(password))) {
      return user.username;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
