import { UserService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { User } from '../models/user.model';
import { Credentials, UserRepository } from '../repositories/user.repository';
import { PasswordHasher } from './hash.password.bcryptjs';
export declare class MyUserService implements UserService<User, Credentials> {
    userRepository: UserRepository;
    passwordHasher: PasswordHasher;
    constructor(userRepository: UserRepository, passwordHasher: PasswordHasher);
    verifyCredentials(credentials: Credentials): Promise<User>;
    convertToUserProfile(user: User): UserProfile;
}
