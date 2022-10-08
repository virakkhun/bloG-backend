"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImage = exports.updateOneUser = exports.deleteUser = exports.createUser = exports.getUser = void 0;
const s3_service_1 = require("../storage/s3.service");
const user_service_1 = require("./user.service");
const user_service_2 = require("./user.service");
async function getUser(request, reply) {
    return reply.send(await (0, user_service_1.fineOneByEmailService)(request.body.email));
}
exports.getUser = getUser;
async function createUser(request, reply) {
    const { email, password } = request.body;
    return reply.send(await (0, user_service_1.createOneUserService)(email, password));
}
exports.createUser = createUser;
async function deleteUser(request, reply) {
    return reply.send(await (0, user_service_1.deleteOneUserService)(request.query.id));
}
exports.deleteUser = deleteUser;
async function updateOneUser(request, reply) {
    return reply.send(await (0, user_service_1.updateOneUserService)(request.query.id, request.body));
}
exports.updateOneUser = updateOneUser;
async function UploadImage(request, reply) {
    const data = await (0, s3_service_1.UploadServiceToS3Storage)(request.file);
    return reply.send(await (0, user_service_2.uploadImageService)(request.query.id, data.Location));
}
exports.UploadImage = UploadImage;
//# sourceMappingURL=user.controller.js.map