import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Award } from '../models';
import { AwardRepository } from '../repositories';
export declare class AwardController {
    awardRepository: AwardRepository;
    constructor(awardRepository: AwardRepository);
    create(award: Omit<Award, 'id'>): Promise<Award>;
    count(where?: Where<Award>): Promise<Count>;
    find(filter?: Filter<Award>): Promise<Award[]>;
    updateAll(award: Award, where?: Where<Award>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Award>): Promise<Award>;
    updateById(id: number, award: Award): Promise<void>;
    replaceById(id: number, award: Award): Promise<void>;
    deleteById(id: number): Promise<void>;
}
