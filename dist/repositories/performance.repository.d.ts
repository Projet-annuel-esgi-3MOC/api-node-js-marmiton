import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Performance, PerformanceRelations } from '../models';
export declare class PerformanceRepository extends DefaultCrudRepository<Performance, typeof Performance.prototype.id, PerformanceRelations> {
    constructor(dataSource: MysqlDataSource);
}
