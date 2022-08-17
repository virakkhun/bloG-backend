"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
            const { password } = user, rest = __rest(user, ["password"]);
            const signToken = __1.server.jwt.sign(rest, {
                expiresIn: 60 * 60 * 24 * 7,
            });
            return signToken;
        }
    }
    return "";
}
exports.loginService = loginService;
//# sourceMappingURL=auth.service.js.map