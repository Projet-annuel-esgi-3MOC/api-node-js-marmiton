import {TokenService, UserService} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {post, requestBody, SchemaObject, del} from '@loopback/rest';
import {
  Credentials,
  TokenServiceBindings,
  UserServiceBindings,
} from '@loopback/authentication-jwt';
import {User} from '../models';

const CredentialsSchema: SchemaObject = {
  type: 'object',
  required: ['email', 'password'],
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
  ): Promise<{message: string}> {
    // You can implement your own logic here to create a user
    // For example, you can use a repository to persist the user in a database
    // or call an external service to create the user

    // Example using a repository:
    // const user = new User();
    // user.email = credentials.email;
    // user.password = credentials.password;
    // await this.userRepository.create(user);

    // Example using an external service:
    // await this.externalUserService.createUser(credentials.email, credentials.password);

    return {message: 'User registered successfully'};
  }

  @del('/users/logout', {
    responses: {
      '204': {
        description: 'Successful logout',
      },
    },
  })
  async logout(): Promise<void> {
    // Perform any additional logout logic here
    // e.g. invalidate the token, remove session, etc.
    // This example assumes a stateless JWT-based authentication
    // where the client handles the token expiration.
    // So, there is no server-side token invalidation required.
  }
}
