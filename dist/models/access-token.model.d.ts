import { Entity } from '@loopback/repository';
export declare class AccessToken extends Entity {
    id?: number;
    userId: number;
    secret: string;
    userAgent: string;
    created?: string;
    lastUsage: string;
    active: boolean;
    constructor(data?: Partial<AccessToken>);
}
export interface AccessTokenRelations {
}
export type AccessTokenWithRelations = AccessToken & AccessTokenRelations;
