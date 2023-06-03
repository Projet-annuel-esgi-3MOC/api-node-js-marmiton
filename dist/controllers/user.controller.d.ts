import { TokenService, UserService } from '@loopback/authentication';
import { SchemaObject } from '@loopback/rest';
import { Credentials } from '@loopback/authentication-jwt';
import { User } from '../models';
import { UserRepository } from '../repositories';
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: SchemaObject;
        };
    };
};
export declare class UserController {
    jwtService: TokenService;
    userService: UserService<User, Credentials>;
    userRepository: UserRepository;
    constructor(jwtService: TokenService, userService: UserService<User, Credentials>, userRepository: UserRepository);
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
    register(credentials: Credentials): Promise<{
        message: string;
    }>;
    logout(): Promise<void>;
}
