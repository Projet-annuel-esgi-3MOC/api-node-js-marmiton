import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Forum } from '../models';
import { ForumRepository } from '../repositories';
export declare class ForumController {
    forumRepository: ForumRepository;
    constructor(forumRepository: ForumRepository);
    create(forum: Omit<Forum, 'id'>): Promise<Forum>;
    count(where?: Where<Forum>): Promise<Count>;
    find(filter?: Filter<Forum>): Promise<Forum[]>;
    updateAll(forum: Forum, where?: Where<Forum>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Forum>): Promise<Forum>;
    updateById(id: number, forum: Forum): Promise<void>;
    replaceById(id: number, forum: Forum): Promise<void>;
    deleteById(id: number): Promise<void>;
}
