"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PerformanceController = class PerformanceController {
    constructor(performanceRepository) {
        this.performanceRepository = performanceRepository;
    }
    async create(performance) {
        return this.performanceRepository.create(performance);
    }
    async count(where) {
        return this.performanceRepository.count(where);
    }
    async find(filter) {
        return this.performanceRepository.find(filter);
    }
    async updateAll(performance, where) {
        return this.performanceRepository.updateAll(performance, where);
    }
    async findById(id, filter) {
        return this.performanceRepository.findById(id, filter);
    }
    async updateById(id, performance) {
        await this.performanceRepository.updateById(id, performance);
    }
    async replaceById(id, performance) {
        await this.performanceRepository.replaceById(id, performance);
    }
    async deleteById(id) {
        await this.performanceRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/performances'),
    (0, rest_1.response)(200, {
        description: 'Performance model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Performance) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Performance, {
                    title: 'NewPerformance',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PerformanceController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/performances/count'),
    (0, rest_1.response)(200, {
        description: 'Performance model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Performance)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PerformanceController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/performances'),
    (0, rest_1.response)(200, {
        description: 'Array of Performance model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Performance, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Performance)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PerformanceController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/performances'),
    (0, rest_1.response)(200, {
        description: 'Performance PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Performance, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Performance)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Performance, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PerformanceController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/performances/{id}'),
    (0, rest_1.response)(200, {
        description: 'Performance model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Performance, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Performance, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PerformanceController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/performances/{id}'),
    (0, rest_1.response)(204, {
        description: 'Performance PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Performance, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Performance]),
    tslib_1.__metadata("design:returntype", Promise)
], PerformanceController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/performances/{id}'),
    (0, rest_1.response)(204, {
        description: 'Performance PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Performance]),
    tslib_1.__metadata("design:returntype", Promise)
], PerformanceController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/performances/{id}'),
    (0, rest_1.response)(204, {
        description: 'Performance DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PerformanceController.prototype, "deleteById", null);
PerformanceController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PerformanceRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PerformanceRepository])
], PerformanceController);
exports.PerformanceController = PerformanceController;
//# sourceMappingURL=performance.controller.js.map