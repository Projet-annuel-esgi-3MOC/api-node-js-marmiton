import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Competition, CompetitionRelations} from '../models';

export class CompetitionRepository extends DefaultCrudRepository<
  Competition,
  typeof Competition.prototype.id,
  CompetitionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Competition, dataSource);
  }
}
