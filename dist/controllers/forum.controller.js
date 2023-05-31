"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ForumController = class ForumController {
    constructor(forumRepository) {
        this.forumRepository = forumRepository;
    }
    async create(forum) {
        return this.forumRepository.create(forum);
    }
    async count(where) {
        return this.forumRepository.count(where);
    }
    async find(filter) {
        return this.forumRepository.find(filter);
    }
    async updateAll(forum, where) {
        return this.forumRepository.updateAll(forum, where);
    }
    async findById(id, filter) {
        return this.forumRepository.findById(id, filter);
    }
    async updateById(id, forum) {
        await this.forumRepository.updateById(id, forum);
    }
    async replaceById(id, forum) {
        await this.forumRepository.replaceById(id, forum);
    }
    async deleteById(id) {
        await this.forumRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/forums'),
    (0, rest_1.response)(200, {
        description: 'Forum model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Forum) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Forum, {
                    title: 'NewForum',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ForumController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/forums/count'),
    (0, rest_1.response)(200, {
        description: 'Forum model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Forum)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ForumController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/forums'),
    (0, rest_1.response)(200, {
        description: 'Array of Forum model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Forum, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Forum)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ForumController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/forums'),
    (0, rest_1.response)(200, {
        description: 'Forum PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Forum, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Forum)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Forum, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ForumController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/forums/{id}'),
    (0, rest_1.response)(200, {
        description: 'Forum model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Forum, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Forum, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ForumController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/forums/{id}'),
    (0, rest_1.response)(204, {
        description: 'Forum PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Forum, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Forum]),
    tslib_1.__metadata("design:returntype", Promise)
], ForumController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/forums/{id}'),
    (0, rest_1.response)(204, {
        description: 'Forum PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Forum]),
    tslib_1.__metadata("design:returntype", Promise)
], ForumController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/forums/{id}'),
    (0, rest_1.response)(204, {
        description: 'Forum DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ForumController.prototype, "deleteById", null);
ForumController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ForumRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ForumRepository])
], ForumController);
exports.ForumController = ForumController;
//# sourceMappingURL=forum.controller.js.map