import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Messages, MessagesRelations} from '../models';

export class MessagesRepository extends DefaultCrudRepository<
  Messages,
  typeof Messages.prototype.id,
  MessagesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Messages, dataSource);
  }
}
