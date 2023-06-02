"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessToken = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AccessToken = class AccessToken extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AccessToken.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AccessToken.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "secret", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "userAgent", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        default: new Date(),
    }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "created", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        default: new Date(),
    }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "lastUsage", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], AccessToken.prototype, "active", void 0);
AccessToken = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], AccessToken);
exports.AccessToken = AccessToken;
//# sourceMappingURL=access-token.model.js.map