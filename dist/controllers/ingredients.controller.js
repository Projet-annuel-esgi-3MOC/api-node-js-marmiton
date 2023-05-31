"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let IngredientsController = class IngredientsController {
    constructor(ingredientsRepository) {
        this.ingredientsRepository = ingredientsRepository;
    }
    async create(ingredients) {
        return this.ingredientsRepository.create(ingredients);
    }
    async count(where) {
        return this.ingredientsRepository.count(where);
    }
    async find(filter) {
        return this.ingredientsRepository.find(filter);
    }
    async updateAll(ingredients, where) {
        return this.ingredientsRepository.updateAll(ingredients, where);
    }
    async findById(id, filter) {
        return this.ingredientsRepository.findById(id, filter);
    }
    async updateById(id, ingredients) {
        await this.ingredientsRepository.updateById(id, ingredients);
    }
    async replaceById(id, ingredients) {
        await this.ingredientsRepository.replaceById(id, ingredients);
    }
    async deleteById(id) {
        await this.ingredientsRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/ingredients'),
    (0, rest_1.response)(200, {
        description: 'Ingredients model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Ingredients) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ingredients, {
                    title: 'NewIngredients',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredientsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ingredients/count'),
    (0, rest_1.response)(200, {
        description: 'Ingredients model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Ingredients)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredientsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ingredients'),
    (0, rest_1.response)(200, {
        description: 'Array of Ingredients model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Ingredients, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Ingredients)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredientsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ingredients'),
    (0, rest_1.response)(200, {
        description: 'Ingredients PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ingredients, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Ingredients)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Ingredients, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredientsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ingredients/{id}'),
    (0, rest_1.response)(200, {
        description: 'Ingredients model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ingredients, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Ingredients, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredientsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ingredients/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ingredients PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ingredients, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Ingredients]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredientsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/ingredients/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ingredients PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Ingredients]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredientsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/ingredients/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ingredients DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredientsController.prototype, "deleteById", null);
IngredientsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.IngredientsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.IngredientsRepository])
], IngredientsController);
exports.IngredientsController = IngredientsController;
//# sourceMappingURL=ingredients.controller.js.map