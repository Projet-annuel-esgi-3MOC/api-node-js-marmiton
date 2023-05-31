import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Award, AwardRelations } from '../models';
export declare class AwardRepository extends DefaultCrudRepository<Award, typeof Award.prototype.id, AwardRelations> {
    constructor(dataSource: MysqlDataSource);
}
