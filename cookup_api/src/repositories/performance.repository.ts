import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Performance, PerformanceRelations} from '../models';

export class PerformanceRepository extends DefaultCrudRepository<
  Performance,
  typeof Performance.prototype.id,
  PerformanceRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Performance, dataSource);
  }
}
