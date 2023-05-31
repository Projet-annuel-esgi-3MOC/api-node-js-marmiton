"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ChallengeController = class ChallengeController {
    constructor(challengeRepository) {
        this.challengeRepository = challengeRepository;
    }
    async create(challenge) {
        return this.challengeRepository.create(challenge);
    }
    async count(where) {
        return this.challengeRepository.count(where);
    }
    async find(filter) {
        return this.challengeRepository.find(filter);
    }
    async updateAll(challenge, where) {
        return this.challengeRepository.updateAll(challenge, where);
    }
    async findById(id, filter) {
        return this.challengeRepository.findById(id, filter);
    }
    async updateById(id, challenge) {
        await this.challengeRepository.updateById(id, challenge);
    }
    async replaceById(id, challenge) {
        await this.challengeRepository.replaceById(id, challenge);
    }
    async deleteById(id) {
        await this.challengeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/challenges'),
    (0, rest_1.response)(200, {
        description: 'Challenge model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge, {
                    title: 'NewChallenge',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/challenges/count'),
    (0, rest_1.response)(200, {
        description: 'Challenge model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Challenge)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/challenges'),
    (0, rest_1.response)(200, {
        description: 'Array of Challenge model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Challenge, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Challenge)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/challenges'),
    (0, rest_1.response)(200, {
        description: 'Challenge PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Challenge)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Challenge, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/challenges/{id}'),
    (0, rest_1.response)(200, {
        description: 'Challenge model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Challenge, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/challenges/{id}'),
    (0, rest_1.response)(204, {
        description: 'Challenge PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Challenge]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/challenges/{id}'),
    (0, rest_1.response)(204, {
        description: 'Challenge PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Challenge]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/challenges/{id}'),
    (0, rest_1.response)(204, {
        description: 'Challenge DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "deleteById", null);
ChallengeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ChallengeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ChallengeRepository])
], ChallengeController);
exports.ChallengeController = ChallengeController;
//# sourceMappingURL=challenge.controller.js.map