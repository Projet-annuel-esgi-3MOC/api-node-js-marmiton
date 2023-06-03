import {TokenService, UserService} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {post, requestBody, SchemaObject, del} from '@loopback/rest';
import {
  Credentials,
  TokenServiceBindings,
  UserServiceBindings
} from '@loopback/authentication-jwt';
import {User} from '../models';
import { hashPassword } from '../services/hash.password.bcryptjs';
import { UserRepository } from '../repositories';
import { repository } from '@loopback/repository';


const CredentialsSchema: SchemaObject = {
  type: 'object',
  required: ['email', 'name', 'surname','password'],
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
};

export const CredentialsRequestBody = {
  description: 'The input of login function',
  required: true,
  content: {
    'application/json': {schema: CredentialsSchema},
  },
};

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
    @requestBody(CredentialsRequestBody) credentials: Credentials,
  ): Promise<{token: string}> {
    // ensure the user exists, and the password is correct
    const user = await this.userService.verifyCredentials(credentials);

    // convert a User object into a UserProfile object (reduced set of properties)
    const userProfile = this.userService.convertToUserProfile(user);

    // create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(userProfile);

    return {token};
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
            name: {
              type: 'string',
            },
            surname: {
              type: 'string',
            },
            email: {
              type: 'string',
              format: 'email',
            },
            password: {
              type: 'string',
              minLength: 8,
            },
          },
        },
      },
    },
  })
  credentials: Credentials,
): Promise<{ message: string }> {
  try {
    const { name, surname, email, password } = credentials;

    // Check if the user with the provided email already exists in the database
    const existingUser = await this.userRepository.findOne({ where: { email } });

    if (existingUser) {
      // If the user already exists, return an error message
      return { message: 'User with this email already exists' };
    }

    // Hash the password before storing it in the database
    const hashedPassword = await hashPassword(password, 10);

    // Create a new user with the provided data
    await this.userRepository.create({ name, surname, email, password: hashedPassword, roles: ['user'] });

    return { message: 'User registered successfully' };
  } catch (error) {
    // Handle any errors that occur during the registration process
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
  async logout(
    
  ): Promise<void> {
     
  }
}
