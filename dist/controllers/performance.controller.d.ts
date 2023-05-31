import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Performance } from '../models';
import { PerformanceRepository } from '../repositories';
export declare class PerformanceController {
    performanceRepository: PerformanceRepository;
    constructor(performanceRepository: PerformanceRepository);
    create(performance: Omit<Performance, 'id'>): Promise<Performance>;
    count(where?: Where<Performance>): Promise<Count>;
    find(filter?: Filter<Performance>): Promise<Performance[]>;
    updateAll(performance: Performance, where?: Where<Performance>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Performance>): Promise<Performance>;
    updateById(id: number, performance: Performance): Promise<void>;
    replaceById(id: number, performance: Performance): Promise<void>;
    deleteById(id: number): Promise<void>;
}
