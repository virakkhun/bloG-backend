"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
const __1 = require("..");
const hashing_1 = require("../utils/hashing");
const prisma_instance_1 = require("../utils/prisma.instance");
async function loginService(payload) {
    const { email, password } = payload;
    const user = await (0, prisma_instance_1.PrismaInstance)().user.findUnique({
        where: {
            email: email,
        },
    });
    if (user !== null) {
        const isMatchPassword = (0, hashing_1.compareHash)(password !== null && password !== void 0 ? password : "", user.password);
        if (isMatchPassword) {
            const signToken = __1.server.jwt.sign(user);
            return signToken;
        }
    }
    return "";
}
exports.loginService = loginService;
//# sourceMappingURL=auth.service.js.map