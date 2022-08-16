"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_controller_1 = require("./comment.controller");
async function commentRoutes(fastify) {
    fastify.post("/comment/create", comment_controller_1.PostComment);
}
exports.default = commentRoutes;
//# sourceMappingURL=comment.route.js.map