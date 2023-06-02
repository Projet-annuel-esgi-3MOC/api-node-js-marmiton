"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const datasources_1 = require("../datasources");
const access_token_model_1 = require("../models/access-token.model");
let AccessTokenRepository = class AccessTokenRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(access_token_model_1.AccessToken, dataSource);
    }
    async newLoginAccess(userId, userAgent) {
        return this.create({
            userId: userId,
            secret: crypto_1.default.randomBytes(64).toString('hex'),
            userAgent: userAgent,
        });
    }
    async getAccessToken(keyId, userId, userAgent) {
        const accessToken = await this.findOne({
            where: {
                id: keyId,
                userId,
                active: true,
            }
        });
        const regexpBrowser = /.+?[/\s][\d.]+/i;
        const currentUserAgent = regexpBrowser.exec(userAgent) || 'current';
        const lastSavedUserAgent = regexpBrowser.exec((accessToken === null || accessToken === void 0 ? void 0 : accessToken.userAgent) || '') || 'last';
        if (currentUserAgent[0] !== lastSavedUserAgent[0]) {
            this.updateById(accessToken === null || accessToken === void 0 ? void 0 : accessToken.id, {
                active: false,
            });
            return Promise.reject('Invalid key');
        }
        this.updateById(accessToken === null || accessToken === void 0 ? void 0 : accessToken.id, {
            userAgent: userAgent,
            lastUsage: new Date().toString(),
        });
        return accessToken;
    }
};
AccessTokenRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mysql')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MysqlDataSource])
], AccessTokenRepository);
exports.AccessTokenRepository = AccessTokenRepository;
//# sourceMappingURL=access-token.repository.js.map