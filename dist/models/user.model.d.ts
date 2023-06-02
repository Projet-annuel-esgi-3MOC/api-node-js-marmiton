import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    email: string;
    name: string;
    surname: string;
    password: string;
    roles?: string[];
    emailVerified?: boolean;
    created?: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export type UserWithRelations = User & UserRelations;
