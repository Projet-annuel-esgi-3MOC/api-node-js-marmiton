import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Messages, MessagesRelations } from '../models';
export declare class MessagesRepository extends DefaultCrudRepository<Messages, typeof Messages.prototype.id, MessagesRelations> {
    constructor(dataSource: MysqlDataSource);
}
