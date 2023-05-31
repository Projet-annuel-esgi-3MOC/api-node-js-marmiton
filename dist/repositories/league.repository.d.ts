import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { League, LeagueRelations } from '../models';
export declare class LeagueRepository extends DefaultCrudRepository<League, typeof League.prototype.id, LeagueRelations> {
    constructor(dataSource: MysqlDataSource);
}
