"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'mysql',
    connector: 'mysql',
    url: '',
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: 'root',
    database: 'cookup',
    charset: 'utf8mb4utf8mb4_0900_ai_ci',
    collation: 'utf8mb4_bin',
};
let MysqlDataSource = class MysqlDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MysqlDataSource.dataSourceName = 'mysql';
MysqlDataSource.defaultConfig = config;
MysqlDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.mysql', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MysqlDataSource);
exports.MysqlDataSource = MysqlDataSource;
//# sourceMappingURL=mysql.datasource.js.map