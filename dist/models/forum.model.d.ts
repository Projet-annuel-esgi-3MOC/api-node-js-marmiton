import { Entity } from '@loopback/repository';
export declare class Forum extends Entity {
    id?: number;
    topic?: string;
    message?: string;
    date?: string;
    constructor(data?: Partial<Forum>);
}
export interface ForumRelations {
}
export type ForumWithRelations = Forum & ForumRelations;
