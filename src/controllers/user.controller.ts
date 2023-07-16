import { TokenService, UserService } from '@loopback/authentication';
import { inject } from '@loopback/core';
import { post, requestBody, del, get, param } from '@loopback/rest';
import {
  Credentials,
  TokenServiceBindings,
  UserServiceBindings
} from '@loopback/authentication-jwt';
import { User } from '../models';
import { hashPassword } from '../services/hash.password.bcryptjs';
import { UserRepository } from '../repositories';
import { repository } from '@loopback/repository';

export class UserController {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: UserService<User, Credentials>,
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  @post('/users/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async login(
    @requestBody({
      description: 'The input of login function',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              email: {
                type: 'string',
                format: 'email',
              },
              password: {
                type: 'string',
                minLength: 8,
              },
            },
            required: ['email', 'password'],
          },
        },
      },
    })
    credentials: Credentials,
  ): Promise<{ token: string }> {
    const user = await this.userService.verifyCredentials(credentials);
    const userProfile = this.userService.convertToUserProfile(user);
    const token = await this.jwtService.generateToken(userProfile);
    return { token };
  }

  @post('/users/register', {
    responses: {
      '200': {
        description: 'User registration',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async register(
    @requestBody({
      description: 'User registration',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              email: {
                type: 'string',
                format: 'email',
              },
              password: {
                type: 'string',
                minLength: 8,
              },
            },
            required: ['email', 'password'],
          },
        },
      },
    })
    credentials: Credentials,
  ): Promise<{ message: string }> {
    try {
      const { email, password } = credentials;
      const existingUser = await this.userRepository.findOne({ where: { email } });

      if (existingUser) {
        return { message: 'User with this email already exists' };
      }

      const hashedPassword = await hashPassword(password, 10);
      await this.userRepository.create({ email, password: hashedPassword, roles: ['user'] });
      return { message: 'User registered successfully' };
    } catch (error) {
      console.error('Error during user registration:', error);
      return { message: 'An error occurred during user registration' };
    }
  }

  @del('/users/logout', {
    responses: {
      '204': {
        description: 'Successful logout',
      },
    },
  })
  async logout(): Promise<void> {
    // Implement your logout logic here
  }

  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'User by ID',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                surname: { type: 'string' },
                email: { type: 'string', format: 'email' },
              },
            },
          },
        },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<User | null> {
    return await this.userRepository.findById(Number(id));
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'List of all users',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  surname: { type: 'string' },
                  email: { type: 'string', format: 'email' },
                },
              },
            },
          },
        },
      },
    },
  })
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
