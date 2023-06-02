import { TokenService, UserService } from '@loopback/authentication';
import { SchemaObject } from '@loopback/rest';
import { Credentials } from '@loopback/authentication-jwt';
import { User } from '../models';
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
    constructor(jwtService: TokenService, userService: UserService<User, Credentials>);
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
    register(credentials: Credentials): Promise<{
        message: string;
    }>;
    logout(): Promise<void>;
}
