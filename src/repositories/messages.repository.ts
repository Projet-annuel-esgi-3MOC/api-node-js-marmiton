import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Messages, MessagesRelations, User} from '../models';
import {UserRepository} from './user.repository';

export class MessagesRepository extends DefaultCrudRepository<
  Messages,
  typeof Messages.prototype.id,
  MessagesRelations
> {

  public readonly user: HasOneRepositoryFactory<User, typeof Messages.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Messages, dataSource);
    this.user = this.createHasOneRepositoryFactoryFor('user', userRepositoryGetter);
  }
}
