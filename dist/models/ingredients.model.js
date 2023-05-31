"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredients = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Ingredients = class Ingredients extends repository_1.Entity {
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
], Ingredients.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Ingredients.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Ingredients.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Ingredients.prototype, "image", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Ingredients.prototype, "recipeId", void 0);
Ingredients = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Ingredients);
exports.Ingredients = Ingredients;
//# sourceMappingURL=ingredients.model.js.map