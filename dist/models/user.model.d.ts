import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    email: string;
    username?: string;
    experience?: string;
    password: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export type UserWithRelations = User & UserRelations;
