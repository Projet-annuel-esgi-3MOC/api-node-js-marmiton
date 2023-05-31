"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetitionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CompetitionController = class CompetitionController {
    constructor(competitionRepository) {
        this.competitionRepository = competitionRepository;
    }
    async create(competition) {
        return this.competitionRepository.create(competition);
    }
    async count(where) {
        return this.competitionRepository.count(where);
    }
    async find(filter) {
        return this.competitionRepository.find(filter);
    }
    async updateAll(competition, where) {
        return this.competitionRepository.updateAll(competition, where);
    }
    async findById(id, filter) {
        return this.competitionRepository.findById(id, filter);
    }
    async updateById(id, competition) {
        await this.competitionRepository.updateById(id, competition);
    }
    async replaceById(id, competition) {
        await this.competitionRepository.replaceById(id, competition);
    }
    async deleteById(id) {
        await this.competitionRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/competitions'),
    (0, rest_1.response)(200, {
        description: 'Competition model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Competition) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Competition, {
                    title: 'NewCompetition',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompetitionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/competitions/count'),
    (0, rest_1.response)(200, {
        description: 'Competition model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Competition)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompetitionController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/competitions'),
    (0, rest_1.response)(200, {
        description: 'Array of Competition model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Competition, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Competition)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompetitionController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/competitions'),
    (0, rest_1.response)(200, {
        description: 'Competition PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Competition, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Competition)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Competition, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompetitionController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/competitions/{id}'),
    (0, rest_1.response)(200, {
        description: 'Competition model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Competition, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Competition, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompetitionController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/competitions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Competition PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Competition, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Competition]),
    tslib_1.__metadata("design:returntype", Promise)
], CompetitionController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/competitions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Competition PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Competition]),
    tslib_1.__metadata("design:returntype", Promise)
], CompetitionController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/competitions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Competition DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CompetitionController.prototype, "deleteById", null);
CompetitionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CompetitionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CompetitionRepository])
], CompetitionController);
exports.CompetitionController = CompetitionController;
//# sourceMappingURL=competition.controller.js.map