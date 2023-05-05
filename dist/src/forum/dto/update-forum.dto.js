"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateForumDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_forum_dto_1 = require("./create-forum.dto");
class UpdateForumDto extends (0, swagger_1.PartialType)(create_forum_dto_1.CreateForumDto) {
}
exports.UpdateForumDto = UpdateForumDto;
//# sourceMappingURL=update-forum.dto.js.map