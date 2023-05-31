"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forum = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Forum = class Forum extends repository_1.Entity {
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
], Forum.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Forum.prototype, "topic", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Forum.prototype, "message", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Forum.prototype, "date", void 0);
Forum = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Forum);
exports.Forum = Forum;
//# sourceMappingURL=forum.model.js.map