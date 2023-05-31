import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Pointlevel } from '../models';
import { PointlevelRepository } from '../repositories';
export declare class PointlevelController {
    pointlevelRepository: PointlevelRepository;
    constructor(pointlevelRepository: PointlevelRepository);
    create(pointlevel: Omit<Pointlevel, 'id'>): Promise<Pointlevel>;
    count(where?: Where<Pointlevel>): Promise<Count>;
    find(filter?: Filter<Pointlevel>): Promise<Pointlevel[]>;
    updateAll(pointlevel: Pointlevel, where?: Where<Pointlevel>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Pointlevel>): Promise<Pointlevel>;
    updateById(id: number, pointlevel: Pointlevel): Promise<void>;
    replaceById(id: number, pointlevel: Pointlevel): Promise<void>;
    deleteById(id: number): Promise<void>;
}
