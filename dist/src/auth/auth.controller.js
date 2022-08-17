"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = void 0;
const message_1 = require("../utils/message");
const repsonse_1 = require("../utils/repsonse");
const statusCode_1 = require("../utils/statusCode");
const auth_service_1 = require("./auth.service");
async function LoginUser(request, reply) {
    const token = await (0, auth_service_1.loginService)(request.body);
    if (token !== "") {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.login, token));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, ""));
}
exports.LoginUser = LoginUser;
//# sourceMappingURL=auth.controller.js.map