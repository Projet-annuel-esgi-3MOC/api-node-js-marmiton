"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueController = void 0;
const common_1 = require("@nestjs/common");
const league_service_1 = require("./league.service");
const create_league_dto_1 = require("./dto/create-league.dto");
const update_league_dto_1 = require("./dto/update-league.dto");
let LeagueController = class LeagueController {
    constructor(leagueService) {
        this.leagueService = leagueService;
    }
    create(createLeagueDto) {
        return this.leagueService.create(createLeagueDto);
    }
    findAll() {
        return this.leagueService.findAll();
    }
    findOne(id) {
        return this.leagueService.findOne(+id);
    }
    update(id, updateLeagueDto) {
        return this.leagueService.update(+id, updateLeagueDto);
    }
    remove(id) {
        return this.leagueService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_league_dto_1.CreateLeagueDto]),
    __metadata("design:returntype", void 0)
], LeagueController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeagueController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeagueController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_league_dto_1.UpdateLeagueDto]),
    __metadata("design:returntype", void 0)
], LeagueController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeagueController.prototype, "remove", null);
LeagueController = __decorate([
    (0, common_1.Controller)('league'),
    __metadata("design:paramtypes", [league_service_1.LeagueService])
], LeagueController);
exports.LeagueController = LeagueController;
//# sourceMappingURL=league.controller.js.map