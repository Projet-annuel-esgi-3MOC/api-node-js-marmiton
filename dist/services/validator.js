"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredentials = void 0;
const tslib_1 = require("tslib");
const isemail_1 = tslib_1.__importDefault(require("isemail"));
const rest_1 = require("@loopback/rest");
function validateCredentials(credentials) {
    // Validate Email
    if (!isemail_1.default.validate(credentials.email)) {
        throw new rest_1.HttpErrors.UnprocessableEntity('invalid email');
    }
    // Validate Password Length
    if (!credentials.password || credentials.password.length < 8) {
        throw new rest_1.HttpErrors.UnprocessableEntity('password must be minimum 8 characters');
    }
}
exports.validateCredentials = validateCredentials;
//# sourceMappingURL=validator.js.map