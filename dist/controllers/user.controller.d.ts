/// <reference types="express" />
import { Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { User } from '../models';
import { Credentials, UserRepository } from '../repositories';
import { PasswordHasher } from '../services/hash.password.bcryptjs';
import { TokenService } from '../services/token.service';
import { MyUserService } from '../services/user.service';
import { ConversionService } from '../services/ConversionService';
import { AccessTokenRepository } from '../repositories/access-token.repository';
export declare class UserController {
    userRepository: UserRepository;
    userService: MyUserService;
    tokenService: TokenService;
    passwordHasher: PasswordHasher;
    accessTokenRepository: AccessTokenRepository;
    private req;
    private conversionService;
    constructor(userRepository: UserRepository, userService: MyUserService, tokenService: TokenService, passwordHasher: PasswordHasher, accessTokenRepository: AccessTokenRepository, req: Request, conversionService: ConversionService);
    register(user: User): Promise<User>;
    me(currentUserProfile: UserProfile): Promise<UserProfile>;
    login(credentials: Credentials): Promise<{
        authToken: string;
    }>;
    logout(currentUserProfile: UserProfile): Promise<boolean>;
    convertVarbinaryToJson(requestData: {
        varbinaryData: string;
    }): Promise<any>;
    convertJsonToVarbinary(requestData: {
        jsonData: any;
    }): Promise<{
        varbinaryData: string;
    }>;
}
