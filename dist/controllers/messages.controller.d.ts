import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Messages } from '../models';
import { MessagesRepository } from '../repositories';
export declare class MessagesController {
    messagesRepository: MessagesRepository;
    constructor(messagesRepository: MessagesRepository);
    create(messages: Omit<Messages, 'id'>): Promise<Messages>;
    count(where?: Where<Messages>): Promise<Count>;
    find(filter?: Filter<Messages>): Promise<Messages[]>;
    updateAll(messages: Messages, where?: Where<Messages>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Messages>): Promise<Messages>;
    updateById(id: number, messages: Messages): Promise<void>;
    replaceById(id: number, messages: Messages): Promise<void>;
    deleteById(id: number): Promise<void>;
}
