"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.CredentialsRequestBody = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const CredentialsSchema = {
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
exports.CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
        'application/json': { schema: CredentialsSchema },
    },
};
let UserController = class UserController {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async login(credentials) {
        // ensure the user exists, and the password is correct
        const user = await this.userService.verifyCredentials(credentials);
        // convert a User object into a UserProfile object (reduced set of properties)
        const userProfile = this.userService.convertToUserProfile(user);
        // create a JSON Web Token based on the user profile
        const token = await this.jwtService.generateToken(userProfile);
        return { token };
    }
    async register(credentials) {
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
        return { message: 'User registered successfully' };
    }
    async logout() {
        // Perform any additional logout logic here
        // e.g. invalidate the token, remove session, etc.
        // This example assumes a stateless JWT-based authentication
        // where the client handles the token expiration.
        // So, there is no server-side token invalidation required.
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/users/login', {
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
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)(exports.CredentialsRequestBody)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
tslib_1.__decorate([
    (0, rest_1.post)('/users/register', {
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
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
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
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
tslib_1.__decorate([
    (0, rest_1.del)('/users/logout', {
        responses: {
            '204': {
                description: 'Successful logout',
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "logout", null);
UserController = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(authentication_jwt_1.TokenServiceBindings.TOKEN_SERVICE)),
    tslib_1.__param(1, (0, core_1.inject)(authentication_jwt_1.UserServiceBindings.USER_SERVICE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map