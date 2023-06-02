"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const authorization_1 = require("@loopback/authorization");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const keys_1 = require("../keys");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const basic_authorizator_1 = require("../services/basic.authorizator");
const user_service_1 = require("../services/user.service");
const validator_1 = require("../services/validator");
const ConversionService_1 = require("../services/ConversionService");
const access_token_repository_1 = require("../repositories/access-token.repository");
let UserController = class UserController {
    constructor(userRepository, userService, tokenService, passwordHasher, accessTokenRepository, req, conversionService) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.tokenService = tokenService;
        this.passwordHasher = passwordHasher;
        this.accessTokenRepository = accessTokenRepository;
        this.req = req;
        this.conversionService = conversionService;
    }
    async register(user) {
        const foundUser = await this.userRepository.findOne({ where: { email: user.email } });
        if (foundUser) {
            throw new rest_1.HttpErrors.BadRequest('User with given email exists');
        }
        (0, validator_1.validateCredentials)(user);
        const password = await this.passwordHasher.hashPassword(user.password);
        const newUser = new models_1.User({
            email: user.email,
            name: user.name,
            surname: user.surname,
            password: password,
            roles: ['user'],
        });
        return this.userRepository.create(newUser);
    }
    async me(currentUserProfile) {
        currentUserProfile.id = currentUserProfile[security_1.securityId];
        return currentUserProfile;
    }
    async login(credentials) {
        const user = await this.userService.verifyCredentials(credentials);
        const userProfile = this.userService.convertToUserProfile(user);
        const accessToken = await this.accessTokenRepository.newLoginAccess(user.id, this.req.headers['user-agent'] || 'undefined');
        const authToken = await this.tokenService.generateToken(userProfile, accessToken);
        return { authToken };
    }
    async logout(currentUserProfile) {
        currentUserProfile.id = currentUserProfile[security_1.securityId];
        await this.accessTokenRepository.updateById(currentUserProfile.kid, {
            active: false,
        });
        return true;
    }
    async convertVarbinaryToJson(requestData) {
        const varbinaryData = Buffer.from(requestData.varbinaryData, 'base64');
        return this.conversionService.convertVarbinaryToJson(varbinaryData);
    }
    async convertJsonToVarbinary(requestData) {
        const varbinaryData = this.conversionService.convertJsonToVarbinary(requestData.jsonData);
        const base64Data = varbinaryData.toString('base64');
        return { varbinaryData: base64Data };
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/users', {
        description: 'Register new user',
        responses: {
            '200': {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.User, {
                            exclude: ['password', 'emailVerified'],
                        }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
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
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
tslib_1.__decorate([
    (0, rest_1.get)('/users/me', {
        security: [{ jwt: [] }],
        responses: {
            '200': {
                description: 'The current user profile',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.User),
                    },
                },
            },
        },
    }),
    (0, authentication_1.authenticate)('jwt'),
    (0, authorization_1.authorize)({ allowedRoles: ['user'], voters: [basic_authorizator_1.basicAuthorization] }),
    tslib_1.__param(0, (0, core_1.inject)(security_1.SecurityBindings.USER)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "me", null);
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
                                authToken: { type: 'string' },
                            },
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
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
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
tslib_1.__decorate([
    (0, rest_1.del)('/logout', {
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
    }),
    (0, authentication_1.authenticate)('jwt'),
    tslib_1.__param(0, (0, core_1.inject)(security_1.SecurityBindings.USER)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "logout", null);
tslib_1.__decorate([
    (0, rest_1.post)('/users/convert-varbinary-to-json', {
        responses: {
            '200': {
                description: 'Converted JSON data',
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
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
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "convertVarbinaryToJson", null);
tslib_1.__decorate([
    (0, rest_1.post)('/users/convert-json-to-varbinary', {
        responses: {
            '200': {
                description: 'Converted varbinary data',
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
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
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "convertJsonToVarbinary", null);
UserController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__param(1, (0, core_1.inject)(keys_1.UserServiceBindings.USER_SERVICE)),
    tslib_1.__param(2, (0, core_1.inject)(keys_1.TokenServiceBindings.TOKEN_SERVICE)),
    tslib_1.__param(3, (0, core_1.inject)(keys_1.PasswordHasherBindings.PASSWORD_HASHER)),
    tslib_1.__param(4, (0, repository_1.repository)(access_token_repository_1.AccessTokenRepository)),
    tslib_1.__param(5, (0, core_1.inject)(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__param(6, (0, core_1.inject)('services.ConversionService')),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository,
        user_service_1.MyUserService, Object, Object, access_token_repository_1.AccessTokenRepository, Object, ConversionService_1.ConversionService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map