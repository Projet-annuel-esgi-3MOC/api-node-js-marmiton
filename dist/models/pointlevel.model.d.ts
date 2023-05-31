import { Entity } from '@loopback/repository';
export declare class Pointlevel extends Entity {
    id?: number;
    point?: number;
    level?: number;
    constructor(data?: Partial<Pointlevel>);
}
export interface PointlevelRelations {
}
export type PointlevelWithRelations = Pointlevel & PointlevelRelations;
