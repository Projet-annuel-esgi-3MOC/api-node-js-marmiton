import { Entity } from '@loopback/repository';
export declare class Performance extends Entity {
    id?: number;
    count?: number;
    member?: number;
    constructor(data?: Partial<Performance>);
}
export interface PerformanceRelations {
}
export type PerformanceWithRelations = Performance & PerformanceRelations;
