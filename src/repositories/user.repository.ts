import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export type Credentials = {
  email: string,
  password: string
}

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
  > {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(User, dataSource);
  }

  async findCredentials(
    userId: typeof User.prototype.id,
  ): Promise<User | undefined> {
    try {
      return await this.findById(userId);
    } catch (err) {
      if (err.code === 'ENTITY_NOT_FOUND') {
        return undefined;
      }
      throw err;
    }
  }
}