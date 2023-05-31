import { Entity } from '@loopback/repository';
export declare class Award extends Entity {
    id?: number;
    nom: string;
    description?: string;
    image?: string;
    constructor(data?: Partial<Award>);
}
export interface AwardRelations {
}
export type AwardWithRelations = Award & AwardRelations;
