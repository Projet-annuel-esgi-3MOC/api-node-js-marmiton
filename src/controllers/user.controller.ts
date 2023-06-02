import { authenticate } from '@loopback/authentication';
import { authorize } from '@loopback/authorization';
import { inject } from '@loopback/core';
import { repository } from '@loopback/repository';
import { del, get, getModelSchemaRef, HttpErrors, post, Request, requestBody, RestBindings } from '@loopback/rest';
import { SecurityBindings, securityId, UserProfile } from '@loopback/security';
import { PasswordHasherBindings, TokenServiceBindings, UserServiceBindings } from '../keys';
import { User } from '../models';
import { Credentials, UserRepository } from '../repositories';
import { basicAuthorization } from '../services/basic.authorizator';
import { PasswordHasher } from '../services/hash.password.bcryptjs';
import { TokenService } from '../services/token.service';
import { MyUserService } from '../services/user.service';
import { validateCredentials } from '../services/validator';
import { ConversionService } from '../services/ConversionService';
import { AccessTokenRepository } from '../repositories/access-token.repository';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: MyUserService,
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public tokenService: TokenService,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
    @repository(AccessTokenRepository)
    public accessTokenRepository: AccessTokenRepository,
    @inject(RestBindings.Http.REQUEST)
    private req: Request,
    @inject('services.ConversionService')
    private conversionService: ConversionService,
  ) {}

  @post('/users', {
    description: 'Register new user',
    responses: {
      '200': {
        description: 'Success',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User, {
              exclude: ['password', 'emailVerified'],
            }),
          },
        },
      },
    },
  })
  async register(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              email: { type: 'string' },
              password: { type: 'string' },
            },
            required: ['email', 'password'],
          },
        },
      },
    })
    user: User,
  ): Promise<User> {
    const foundUser = await this.userRepository.findOne({ where: { email: user.email } });
    if (foundUser) {
      throw new HttpErrors.BadRequest('User with given email exists');
    }

    validateCredentials(user);

    const password = await this.passwordHasher.hashPassword(user.password);

    const newUser = new User({
      email: user.email,
      name: user.name,
      surname: user.surname,
      password: password,
      roles: ['user'],
    });

    return this.userRepository.create(newUser);
  }

  @get('/users/me', {
    security: [{ jwt: [] }],
    responses: {
      '200': {
        description: 'The current user profile',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User),
          },
        },
      },
    },
  })
  @authenticate('jwt')
  @authorize({ allowedRoles: ['user'], voters: [basicAuthorization] })
  async me(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
  ): Promise<UserProfile> {
    currentUserProfile.id = currentUserProfile[securityId];
    return currentUserProfile;
  }

  @post('/users/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                authToken: { type: 'string' },
              },
            },
          },
        },
      },
    },
  })
  async login(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              email: { type: 'string' },
              password: { type: 'string' },
            },
            required: ['email', 'password'],
          },
        },
      },
    })
    credentials: Credentials,
  ): Promise<{ authToken: string }> {
    const user = await this.userService.verifyCredentials(credentials);
    const userProfile = this.userService.convertToUserProfile(user);

    const accessToken = await this.accessTokenRepository.newLoginAccess(user.id, this.req.headers['user-agent'] || 'undefined');

    const authToken = await this.tokenService.generateToken(userProfile, accessToken);

    return { authToken };
  }

  @del('/logout', {
    security: [{ jwt: [] }],
    responses: {
      '200': {
        description: 'Logout',
        content: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async logout(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
  ): Promise<boolean> {
    currentUserProfile.id = currentUserProfile[securityId];
    await this.accessTokenRepository.updateById(currentUserProfile.kid, {
      active: false,
    });
    return true;
  }

  @post('/users/convert-varbinary-to-json', {
    responses: {
      '200': {
        description: 'Converted JSON data',
      },
    },
  })
  async convertVarbinaryToJson(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              varbinaryData: { type: 'string' },
            },
            required: ['varbinaryData'],
          },
        },
      },
    })
    requestData: { varbinaryData: string },
  ): Promise<any> {
    const varbinaryData = Buffer.from(requestData.varbinaryData, 'base64');
    return this.conversionService.convertVarbinaryToJson(varbinaryData);
  }

  @post('/users/convert-json-to-varbinary', {
    responses: {
      '200': {
        description: 'Converted varbinary data',
      },
    },
  })
  async convertJsonToVarbinary(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              jsonData: { type: 'object' },
            },
            required: ['jsonData'],
          },
        },
      },
    })
    requestData: { jsonData: any },
  ): Promise<{ varbinaryData: string }> {
    const varbinaryData = this.conversionService.convertJsonToVarbinary(requestData.jsonData);
    const base64Data = varbinaryData.toString('base64');
    return { varbinaryData: base64Data };
  }
}
