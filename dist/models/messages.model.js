"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_model_1 = require("./user.model");
let Messages = class Messages extends repository_1.Entity {
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
], Messages.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Messages.prototype, "message", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Messages.prototype, "date", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Messages.prototype, "senderId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Messages.prototype, "conversationId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => user_model_1.User),
    tslib_1.__metadata("design:type", user_model_1.User)
], Messages.prototype, "user", void 0);
Messages = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Messages);
exports.Messages = Messages;
//# sourceMappingURL=messages.model.js.map