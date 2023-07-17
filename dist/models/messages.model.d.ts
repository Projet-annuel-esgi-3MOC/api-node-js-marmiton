import { Entity } from '@loopback/repository';
import { User } from './user.model';
export declare class Messages extends Entity {
    id?: number;
    message: string;
    date?: string;
    senderId?: string;
    conversationId?: string;
    user: User;
    constructor(data?: Partial<Messages>);
}
export interface MessagesRelations {
}
export type MessagesWithRelations = Messages & MessagesRelations;
