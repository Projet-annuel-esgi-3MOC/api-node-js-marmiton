"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MessagesController = class MessagesController {
    constructor(messagesRepository) {
        this.messagesRepository = messagesRepository;
    }
    async create(messages) {
        return this.messagesRepository.create(messages);
    }
    async count(where) {
        return this.messagesRepository.count(where);
    }
    async find(filter) {
        return this.messagesRepository.find(filter);
    }
    async updateAll(messages, where) {
        return this.messagesRepository.updateAll(messages, where);
    }
    async findById(id, filter) {
        return this.messagesRepository.findById(id, filter);
    }
    async updateById(id, messages) {
        await this.messagesRepository.updateById(id, messages);
    }
    async replaceById(id, messages) {
        await this.messagesRepository.replaceById(id, messages);
    }
    async deleteById(id) {
        await this.messagesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/messages'),
    (0, rest_1.response)(200, {
        description: 'Messages model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Messages) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Messages, {
                    title: 'NewMessages',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/messages/count'),
    (0, rest_1.response)(200, {
        description: 'Messages model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Messages)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/messages'),
    (0, rest_1.response)(200, {
        description: 'Array of Messages model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Messages, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Messages)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/messages'),
    (0, rest_1.response)(200, {
        description: 'Messages PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Messages, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Messages)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Messages, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/messages/{id}'),
    (0, rest_1.response)(200, {
        description: 'Messages model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Messages, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Messages, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/messages/{id}'),
    (0, rest_1.response)(204, {
        description: 'Messages PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Messages, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Messages]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/messages/{id}'),
    (0, rest_1.response)(204, {
        description: 'Messages PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Messages]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/messages/{id}'),
    (0, rest_1.response)(204, {
        description: 'Messages DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesController.prototype, "deleteById", null);
MessagesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MessagesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MessagesRepository])
], MessagesController);
exports.MessagesController = MessagesController;
//# sourceMappingURL=messages.controller.js.map