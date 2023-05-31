"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Challenge = class Challenge extends repository_1.Entity {
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
], Challenge.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Challenge.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Challenge.prototype, "level", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Challenge.prototype, "status", void 0);
Challenge = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Challenge);
exports.Challenge = Challenge;
//# sourceMappingURL=challenge.model.js.map