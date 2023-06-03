"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.CredentialsRequestBody = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const hash_password_bcryptjs_1 = require("../services/hash.password.bcryptjs");
const repositories_1 = require("../repositories");
const repository_1 = require("@loopback/repository");
const CredentialsSchema = {
    type: 'object',
    required: ['email', 'name', 'surname', 'password'],
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
    constructor(jwtService, userService, userRepository) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.userRepository = userRepository;
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
        try {
            const { name, surname, email, password } = credentials;
            // Check if the user with the provided email already exists in the database
            const existingUser = await this.userRepository.findOne({ where: { email } });
            if (existingUser) {
                // If the user already exists, return an error message
                return { message: 'User with this email already exists' };
            }
            // Hash the password before storing it in the database
            const hashedPassword = await (0, hash_password_bcryptjs_1.hashPassword)(password, 10);
            // Create a new user with the provided data
            await this.userRepository.create({ name, surname, email, password: hashedPassword, roles: ['user'] });
            return { message: 'User registered successfully' };
        }
        catch (error) {
            // Handle any errors that occur during the registration process
            console.error('Error during user registration:', error);
            return { message: 'An error occurred during user registration' };
        }
    }
    async logout() {
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
    tslib_1.__param(2, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, repositories_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map