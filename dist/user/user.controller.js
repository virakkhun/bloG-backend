"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.createUser = exports.getUser = void 0;
const message_1 = require("../utils/message");
const repsonse_1 = require("../utils/repsonse");
const statusCode_1 = require("../utils/statusCode");
const user_service_1 = require("./user.service");
async function getUser(request, reply) {
    const user = await (0, user_service_1.fineOneByEmail)(request.body.email);
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.get, user));
}
exports.getUser = getUser;
async function createUser(request, reply) {
    const { email, password } = request.body;
    const newUser = await (0, user_service_1.createOneUser)(email, password);
    if (!newUser) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, {}));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.created, newUser));
}
exports.createUser = createUser;
async function deleteUser(request, reply) {
    const isDeleteSuccess = await (0, user_service_1.deleteOneUser)(request.query.id);
    if (isDeleteSuccess) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.deleted, isDeleteSuccess));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, ""));
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map