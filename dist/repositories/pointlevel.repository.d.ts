import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Pointlevel, PointlevelRelations } from '../models';
export declare class PointlevelRepository extends DefaultCrudRepository<Pointlevel, typeof Pointlevel.prototype.id, PointlevelRelations> {
    constructor(dataSource: MysqlDataSource);
}
