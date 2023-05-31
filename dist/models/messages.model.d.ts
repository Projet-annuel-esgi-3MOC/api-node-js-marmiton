import { Entity } from '@loopback/repository';
export declare class Messages extends Entity {
    id?: number;
    message: string;
    date?: string;
    constructor(data?: Partial<Messages>);
}
export interface MessagesRelations {
}
export type MessagesWithRelations = Messages & MessagesRelations;
