import { Entity } from '@loopback/repository';
export declare class League extends Entity {
    id?: number;
    name: string;
    max?: number;
    min?: number;
    constructor(data?: Partial<League>);
}
export interface LeagueRelations {
}
export type LeagueWithRelations = League & LeagueRelations;
