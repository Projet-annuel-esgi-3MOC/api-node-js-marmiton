import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { User, UserRelations } from '../models';
export type Credentials = {
    email: string;
    password: string;
};
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    constructor(dataSource: MysqlDataSource);
    findCredentials(userId: typeof User.prototype.id): Promise<User | undefined>;
}
