"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeIngredientsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RecipeIngredientsController = class RecipeIngredientsController {
    constructor(recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    async find(id, filter) {
        return this.recipeRepository.ingredients(id).find(filter);
    }
    async create(id, ingredients) {
        return this.recipeRepository.ingredients(id).create(ingredients);
    }
    async patch(id, ingredients, where) {
        return this.recipeRepository.ingredients(id).patch(ingredients, where);
    }
    async delete(id, where) {
        return this.recipeRepository.ingredients(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/recipes/{id}/ingredients', {
        responses: {
            '200': {
                description: 'Array of Recipe has many Ingredients',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Ingredients) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeIngredientsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/recipes/{id}/ingredients', {
        responses: {
            '200': {
                description: 'Recipe model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Ingredients) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ingredients, {
                    title: 'NewIngredientsInRecipe',
                    exclude: ['id'],
                    optional: ['recipeId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeIngredientsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/recipes/{id}/ingredients', {
        responses: {
            '200': {
                description: 'Recipe.Ingredients PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ingredients, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Ingredients))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeIngredientsController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/recipes/{id}/ingredients', {
        responses: {
            '200': {
                description: 'Recipe.Ingredients DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Ingredients))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeIngredientsController.prototype, "delete", null);
RecipeIngredientsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RecipeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RecipeRepository])
], RecipeIngredientsController);
exports.RecipeIngredientsController = RecipeIngredientsController;
//# sourceMappingURL=recipe-ingredients.controller.js.map