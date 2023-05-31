"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Performance = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Performance = class Performance extends repository_1.Entity {
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
], Performance.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Performance.prototype, "count", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Performance.prototype, "member", void 0);
Performance = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Performance);
exports.Performance = Performance;
//# sourceMappingURL=performance.model.js.map