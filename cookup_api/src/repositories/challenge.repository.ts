import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Challenge, ChallengeRelations} from '../models';

export class ChallengeRepository extends DefaultCrudRepository<
  Challenge,
  typeof Challenge.prototype.id,
  ChallengeRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Challenge, dataSource);
  }
}
