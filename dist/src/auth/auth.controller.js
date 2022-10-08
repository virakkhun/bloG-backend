"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = void 0;
const repsonse_1 = require("../utils/repsonse");
const auth_service_1 = require("./auth.service");
async function LoginUser(request, reply) {
    const token = await (0, auth_service_1.loginService)(request.body);
    if (token === "") {
        return reply.send((0, repsonse_1.CommonResponse)({
            code: 401,
            data: null,
            msg: "Failed",
        }));
    }
    return reply.send((0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Logined Successfully",
        data: token,
    }));
}
exports.LoginUser = LoginUser;
//# sourceMappingURL=auth.controller.js.map