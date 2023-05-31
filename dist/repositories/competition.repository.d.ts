import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Competition, CompetitionRelations } from '../models';
export declare class CompetitionRepository extends DefaultCrudRepository<Competition, typeof Competition.prototype.id, CompetitionRelations> {
    constructor(dataSource: MysqlDataSource);
}
