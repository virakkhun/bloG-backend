"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const auth_controller_1 = require("./auth.controller");
async function authRoute(fastify) {
    fastify.post("/auth/login", auth_controller_1.LoginUser);
}
exports.authRoute = authRoute;
//# sourceMappingURL=auth.route.js.map