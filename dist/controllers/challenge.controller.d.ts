import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Challenge } from '../models';
import { ChallengeRepository } from '../repositories';
export declare class ChallengeController {
    challengeRepository: ChallengeRepository;
    constructor(challengeRepository: ChallengeRepository);
    create(challenge: Omit<Challenge, 'id'>): Promise<Challenge>;
    count(where?: Where<Challenge>): Promise<Count>;
    find(filter?: Filter<Challenge>): Promise<Challenge[]>;
    updateAll(challenge: Challenge, where?: Where<Challenge>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Challenge>): Promise<Challenge>;
    updateById(id: number, challenge: Challenge): Promise<void>;
    replaceById(id: number, challenge: Challenge): Promise<void>;
    deleteById(id: number): Promise<void>;
}
