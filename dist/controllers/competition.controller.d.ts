import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Competition } from '../models';
import { CompetitionRepository } from '../repositories';
export declare class CompetitionController {
    competitionRepository: CompetitionRepository;
    constructor(competitionRepository: CompetitionRepository);
    create(competition: Omit<Competition, 'id'>): Promise<Competition>;
    count(where?: Where<Competition>): Promise<Count>;
    find(filter?: Filter<Competition>): Promise<Competition[]>;
    updateAll(competition: Competition, where?: Where<Competition>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Competition>): Promise<Competition>;
    updateById(id: number, competition: Competition): Promise<void>;
    replaceById(id: number, competition: Competition): Promise<void>;
    deleteById(id: number): Promise<void>;
}
