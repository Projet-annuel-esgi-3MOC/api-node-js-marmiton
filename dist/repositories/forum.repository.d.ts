import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Forum, ForumRelations } from '../models';
export declare class ForumRepository extends DefaultCrudRepository<Forum, typeof Forum.prototype.id, ForumRelations> {
    constructor(dataSource: MysqlDataSource);
}
