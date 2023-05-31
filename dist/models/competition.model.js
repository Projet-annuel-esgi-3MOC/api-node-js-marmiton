"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Competition = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Competition = class Competition extends repository_1.Entity {
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
], Competition.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Competition.prototype, "datestart", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Competition.prototype, "dateend", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Competition.prototype, "statut", void 0);
Competition = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Competition);
exports.Competition = Competition;
//# sourceMappingURL=competition.model.js.map