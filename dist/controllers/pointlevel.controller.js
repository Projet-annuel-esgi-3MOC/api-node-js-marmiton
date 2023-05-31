"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointlevelController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PointlevelController = class PointlevelController {
    constructor(pointlevelRepository) {
        this.pointlevelRepository = pointlevelRepository;
    }
    async create(pointlevel) {
        return this.pointlevelRepository.create(pointlevel);
    }
    async count(where) {
        return this.pointlevelRepository.count(where);
    }
    async find(filter) {
        return this.pointlevelRepository.find(filter);
    }
    async updateAll(pointlevel, where) {
        return this.pointlevelRepository.updateAll(pointlevel, where);
    }
    async findById(id, filter) {
        return this.pointlevelRepository.findById(id, filter);
    }
    async updateById(id, pointlevel) {
        await this.pointlevelRepository.updateById(id, pointlevel);
    }
    async replaceById(id, pointlevel) {
        await this.pointlevelRepository.replaceById(id, pointlevel);
    }
    async deleteById(id) {
        await this.pointlevelRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/pointlevels'),
    (0, rest_1.response)(200, {
        description: 'Pointlevel model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pointlevel) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pointlevel, {
                    title: 'NewPointlevel',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PointlevelController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pointlevels/count'),
    (0, rest_1.response)(200, {
        description: 'Pointlevel model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Pointlevel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PointlevelController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pointlevels'),
    (0, rest_1.response)(200, {
        description: 'Array of Pointlevel model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Pointlevel, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Pointlevel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PointlevelController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pointlevels'),
    (0, rest_1.response)(200, {
        description: 'Pointlevel PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pointlevel, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Pointlevel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Pointlevel, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PointlevelController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pointlevels/{id}'),
    (0, rest_1.response)(200, {
        description: 'Pointlevel model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pointlevel, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Pointlevel, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PointlevelController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pointlevels/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pointlevel PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pointlevel, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Pointlevel]),
    tslib_1.__metadata("design:returntype", Promise)
], PointlevelController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/pointlevels/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pointlevel PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Pointlevel]),
    tslib_1.__metadata("design:returntype", Promise)
], PointlevelController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/pointlevels/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pointlevel DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PointlevelController.prototype, "deleteById", null);
PointlevelController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PointlevelRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PointlevelRepository])
], PointlevelController);
exports.PointlevelController = PointlevelController;
//# sourceMappingURL=pointlevel.controller.js.map