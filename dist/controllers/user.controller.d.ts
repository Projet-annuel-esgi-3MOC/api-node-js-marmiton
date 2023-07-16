import { TokenService, UserService } from '@loopback/authentication';
import { Credentials } from '@loopback/authentication-jwt';
import { User } from '../models';
import { UserRepository } from '../repositories';
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
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
}
