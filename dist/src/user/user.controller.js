"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImage = exports.updateOneUser = exports.deleteUser = exports.createUser = exports.getUser = void 0;
const s3_service_1 = require("../storage/s3.service");
const message_1 = require("../utils/message");
const repsonse_1 = require("../utils/repsonse");
const statusCode_1 = require("../utils/statusCode");
const user_service_1 = require("./user.service");
async function getUser(request, reply) {
    const user = await (0, user_service_1.fineOneByEmailService)(request.body.email);
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.get, user));
}
exports.getUser = getUser;
async function createUser(request, reply) {
    const { email, password } = request.body;
    const newUser = await (0, user_service_1.createOneUserService)(email, password);
    if (!newUser) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, {}));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.created, newUser));
}
exports.createUser = createUser;
async function deleteUser(request, reply) {
    const isDeleteSuccess = await (0, user_service_1.deleteOneUserService)(request.query.id);
    if (isDeleteSuccess) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.deleted, isDeleteSuccess));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, ""));
}
exports.deleteUser = deleteUser;
async function updateOneUser(request, reply) {
    const update = await (0, user_service_1.updateOneUserService)(request.query.id, request.body);
    if (update) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.updated, update));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, ""));
}
exports.updateOneUser = updateOneUser;
async function UploadImage(request, reply) {
    const data = await (0, s3_service_1.UploadServiceToS3Storage)(request.file);
    const upload = await (0, user_service_1.uploadImageService)(request.query.id, data.Location);
    if (upload) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.created, upload));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, ""));
}
exports.UploadImage = UploadImage;
//# sourceMappingURL=user.controller.js.map