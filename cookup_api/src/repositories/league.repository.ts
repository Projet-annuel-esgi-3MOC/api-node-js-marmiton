import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {League, LeagueRelations} from '../models';

export class LeagueRepository extends DefaultCrudRepository<
  League,
  typeof League.prototype.id,
  LeagueRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(League, dataSource);
  }
}
