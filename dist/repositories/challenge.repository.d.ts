import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Challenge, ChallengeRelations } from '../models';
export declare class ChallengeRepository extends DefaultCrudRepository<Challenge, typeof Challenge.prototype.id, ChallengeRelations> {
    constructor(dataSource: MysqlDataSource);
}
