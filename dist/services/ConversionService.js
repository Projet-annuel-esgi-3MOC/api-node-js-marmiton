"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
let ConversionService = class ConversionService {
    convertVarbinaryToJson(varbinaryData) {
        const jsonString = varbinaryData.toString('utf-8');
        console.log(jsonString);
        return JSON.parse(jsonString);
    }
    convertJsonToVarbinary(jsonData) {
        const jsonString = JSON.stringify(jsonData);
        console.log(jsonString);
        return Buffer.from(jsonString, 'utf-8');
    }
};
ConversionService = tslib_1.__decorate([
    (0, core_1.injectable)()
], ConversionService);
exports.ConversionService = ConversionService;
//# sourceMappingURL=ConversionService.js.map