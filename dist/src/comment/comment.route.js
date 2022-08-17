"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_controller_1 = require("./comment.controller");
async function commentRoutes(fastify) {
    fastify.post("/create", comment_controller_1.PostComment);
    fastify.get("/post", comment_controller_1.GetAllCommentInOnePost);
}
exports.default = commentRoutes;
//# sourceMappingURL=comment.route.js.map