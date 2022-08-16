"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_controller_1 = require("./post.controller");
async function postRoutes(fastify) {
    fastify.get("/all-posts", post_controller_1.GetAllPostWithComment);
    fastify.post("/post/create", post_controller_1.CreateOnePost);
}
exports.default = postRoutes;
//# sourceMappingURL=post.routes.js.map