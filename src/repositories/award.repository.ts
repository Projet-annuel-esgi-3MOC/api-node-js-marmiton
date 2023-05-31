import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Award, AwardRelations} from '../models';

export class AwardRepository extends DefaultCrudRepository<
  Award,
  typeof Award.prototype.id,
  AwardRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Award, dataSource);
  }
}
