import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Pointlevel, PointlevelRelations} from '../models';

export class PointlevelRepository extends DefaultCrudRepository<
  Pointlevel,
  typeof Pointlevel.prototype.id,
  PointlevelRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Pointlevel, dataSource);
  }
}
