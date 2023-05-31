"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pointlevel = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Pointlevel = class Pointlevel extends repository_1.Entity {
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
], Pointlevel.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Pointlevel.prototype, "point", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Pointlevel.prototype, "level", void 0);
Pointlevel = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Pointlevel);
exports.Pointlevel = Pointlevel;
//# sourceMappingURL=pointlevel.model.js.map