import { UserProfile } from '@loopback/security';
import { AccessToken } from '../models/access-token.model';
import { TokenService } from '../services/token.service';
export declare class JWTService implements TokenService {
    private jwtSecret;
    private jwtExpiresIn;
    constructor(jwtSecret: string, jwtExpiresIn: string);
    verifyToken(token: string, accessToken: AccessToken): Promise<UserProfile>;
    generateToken(userProfile: UserProfile, accessToken: AccessToken): Promise<string>;
}
