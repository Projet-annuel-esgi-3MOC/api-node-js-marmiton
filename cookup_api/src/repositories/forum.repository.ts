import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Forum, ForumRelations} from '../models';

export class ForumRepository extends DefaultCrudRepository<
  Forum,
  typeof Forum.prototype.id,
  ForumRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Forum, dataSource);
  }
}
