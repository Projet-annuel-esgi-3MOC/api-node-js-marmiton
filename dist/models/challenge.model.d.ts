import { Entity } from '@loopback/repository';
export declare class Challenge extends Entity {
    id?: number;
    name: string;
    level?: number;
    status?: string;
    constructor(data?: Partial<Challenge>);
}
export interface ChallengeRelations {
}
export type ChallengeWithRelations = Challenge & ChallengeRelations;
