"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
async function users(fastify) {
    fastify.get("/user-info", user_controller_1.getUser);
    fastify.post("/user/create", user_controller_1.createUser);
    fastify.post("/user/delete", user_controller_1.deleteUser);
}
exports.default = users;
//# sourceMappingURL=user.routes.js.map