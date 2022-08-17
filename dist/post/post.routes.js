"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_controller_1 = require("./post.controller");
async function postRoutes(fastify) {
    //** Get all post */
    fastify.get("/all", { preHandler: [fastify.authenticate] }, post_controller_1.GetAllPostWithComment);
    //** Create one post */
    fastify.post("/create", {
        preHandler: [fastify.authenticate],
    }, post_controller_1.CreateOnePost);
    //** Delete one post by ID */
    fastify.post("/delete", {
        preHandler: [fastify.authenticate],
    }, post_controller_1.DeleteOnePost);
    //** Update one post by ID */
    fastify.post("/update", {
        preHandler: [fastify.authenticate],
    }, post_controller_1.UpdateOnePost);
}
exports.default = postRoutes;
//# sourceMappingURL=post.routes.js.map