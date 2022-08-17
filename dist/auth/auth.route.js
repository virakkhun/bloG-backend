"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const auth_controller_1 = require("./auth.controller");
async function authRoutes(fastify) {
    fastify.post("/login", auth_controller_1.LoginUser);
}
exports.authRoutes = authRoutes;
//# sourceMappingURL=auth.route.js.map