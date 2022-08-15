"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_instance_1 = require("../../utils/prisma.instance");
async function commentRoutes(fastify, options) {
    fastify.post("/comment/create", async (request, reply) => {
        const { comment, postId } = request.body;
        const newComment = await (0, prisma_instance_1.PrismaInstance)().comment.create({
            data: {
                comment: comment,
                postId: postId,
            },
        });
        if (newComment) {
            return reply.send({
                statusCode: 200,
                message: "Create comment successfully",
                data: newComment,
            });
        }
        return reply.send({
            statusCode: 401,
            message: "Failed to create comment!",
            data: [],
        });
    });
}
exports.default = commentRoutes;
//# sourceMappingURL=comment.route.js.map