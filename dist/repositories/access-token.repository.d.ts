import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { AccessToken, AccessTokenRelations } from '../models/access-token.model';
import { User } from '../models/user.model';
export declare class AccessTokenRepository extends DefaultCrudRepository<AccessToken, typeof AccessToken.prototype.id, AccessTokenRelations> {
    constructor(dataSource: MysqlDataSource);
    newLoginAccess(userId: typeof User.prototype.id, userAgent: typeof AccessToken.prototype.userAgent): Promise<AccessToken>;
    getAccessToken(keyId: typeof AccessToken.prototype.id, userId: typeof AccessToken.prototype.userId, userAgent: typeof AccessToken.prototype.userAgent): Promise<AccessToken | null>;
}
