"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwardController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AwardController = class AwardController {
    constructor(awardRepository) {
        this.awardRepository = awardRepository;
    }
    async create(award) {
        return this.awardRepository.create(award);
    }
    async count(where) {
        return this.awardRepository.count(where);
    }
    async find(filter) {
        return this.awardRepository.find(filter);
    }
    async updateAll(award, where) {
        return this.awardRepository.updateAll(award, where);
    }
    async findById(id, filter) {
        return this.awardRepository.findById(id, filter);
    }
    async updateById(id, award) {
        await this.awardRepository.updateById(id, award);
    }
    async replaceById(id, award) {
        await this.awardRepository.replaceById(id, award);
    }
    async deleteById(id) {
        await this.awardRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/awards'),
    (0, rest_1.response)(200, {
        description: 'Award model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Award) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Award, {
                    title: 'NewAward',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AwardController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/awards/count'),
    (0, rest_1.response)(200, {
        description: 'Award model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Award)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AwardController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/awards'),
    (0, rest_1.response)(200, {
        description: 'Array of Award model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Award, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Award)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AwardController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/awards'),
    (0, rest_1.response)(200, {
        description: 'Award PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Award, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Award)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Award, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AwardController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/awards/{id}'),
    (0, rest_1.response)(200, {
        description: 'Award model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Award, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Award, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AwardController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/awards/{id}'),
    (0, rest_1.response)(204, {
        description: 'Award PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Award, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Award]),
    tslib_1.__metadata("design:returntype", Promise)
], AwardController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/awards/{id}'),
    (0, rest_1.response)(204, {
        description: 'Award PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Award]),
    tslib_1.__metadata("design:returntype", Promise)
], AwardController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/awards/{id}'),
    (0, rest_1.response)(204, {
        description: 'Award DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AwardController.prototype, "deleteById", null);
AwardController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AwardRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AwardRepository])
], AwardController);
exports.AwardController = AwardController;
//# sourceMappingURL=award.controller.js.map