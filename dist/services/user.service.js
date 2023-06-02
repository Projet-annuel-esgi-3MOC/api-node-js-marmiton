"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyUserService = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const keys_1 = require("../keys");
const user_repository_1 = require("../repositories/user.repository");
let MyUserService = class MyUserService {
    constructor(userRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }
    async verifyCredentials(credentials) {
        const invalidCredentialsError = 'Invalid email or password.';
        const foundUser = await this.userRepository.findOne({
            where: { email: credentials.email },
        });
        if (!foundUser) {
            throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
        }
        const passwordMatched = await this.passwordHasher.comparePassword(credentials.password, foundUser.password);
        if (!passwordMatched) {
            throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
        }
        return foundUser;
    }
    convertToUserProfile(user) {
        // since first name and surname are optional, no error is thrown if not provided
        let userName = '';
        if (user.name)
            userName = `${user.name}`;
        if (user.surname)
            userName = user.name
                ? `${userName} ${user.surname}`
                : `${user.surname}`;
        const userProfile = {
            [security_1.securityId]: user.id,
            email: user.email,
            name: userName,
            id: user.id,
            roles: user.roles,
        };
        return userProfile;
    }
};
MyUserService = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(user_repository_1.UserRepository)),
    tslib_1.__param(1, (0, context_1.inject)(keys_1.PasswordHasherBindings.PASSWORD_HASHER)),
    tslib_1.__metadata("design:paramtypes", [user_repository_1.UserRepository, Object])
], MyUserService);
exports.MyUserService = MyUserService;
//# sourceMappingURL=user.service.js.map