import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Messages, MessagesRelations, User } from '../models';
import { UserRepository } from './user.repository';
export declare class MessagesRepository extends DefaultCrudRepository<Messages, typeof Messages.prototype.id, MessagesRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly user: HasOneRepositoryFactory<User, typeof Messages.prototype.id>;
    constructor(dataSource: MysqlDataSource, userRepositoryGetter: Getter<UserRepository>);
}
