"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
let RecipeController = class RecipeController {
    constructor(recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    async create(recipe) {
        return this.recipeRepository.create(recipe);
    }
    async count(where) {
        return this.recipeRepository.count(where);
    }
    async find(filter) {
        return this.recipeRepository.find(filter);
    }
    async updateAll(recipe, where) {
        return this.recipeRepository.updateAll(recipe, where);
    }
    async findById(id, filter) {
        return this.recipeRepository.findById(id, filter);
    }
    async updateById(id, recipe) {
        await this.recipeRepository.updateById(id, recipe);
    }
    async replaceById(id, recipe) {
        await this.recipeRepository.replaceById(id, recipe);
    }
    async deleteById(id) {
        await this.recipeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/recipes'),
    (0, rest_1.response)(200, {
        description: 'Recipe model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Recipe) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Recipe, {
                    title: 'NewRecipe',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/recipes/count'),
    (0, rest_1.response)(200, {
        description: 'Recipe model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Recipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/recipes'),
    (0, rest_1.response)(200, {
        description: 'Array of Recipe model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Recipe, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Recipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/recipes'),
    (0, rest_1.response)(200, {
        description: 'Recipe PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Recipe, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Recipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Recipe, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/recipes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Recipe model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Recipe, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Recipe, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/recipes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Recipe PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Recipe, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Recipe]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/recipes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Recipe PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Recipe]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/recipes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Recipe DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeController.prototype, "deleteById", null);
RecipeController = tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt') // <-- apply  the @authenticate decorator at the class level
    ,
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RecipeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RecipeRepository])
], RecipeController);
exports.RecipeController = RecipeController;
//# sourceMappingURL=recipe.controller.js.map