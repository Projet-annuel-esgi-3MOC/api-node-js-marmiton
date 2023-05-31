import { Entity } from '@loopback/repository';
export declare class Competition extends Entity {
    id?: number;
    datestart?: string;
    dateend?: string;
    statut: string;
    constructor(data?: Partial<Competition>);
}
export interface CompetitionRelations {
}
export type CompetitionWithRelations = Competition & CompetitionRelations;
