"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwtService_1 = require("../../utils/jwtService");
const prisma_instance_1 = require("../../utils/prisma.instance");
async function postRoutes(fastify, options) {
    fastify.get("/all-posts", {
        onRequest: async (request, reply, done) => {
            const { token } = request.headers;
            const tokenIsVerify = await (0, jwtService_1.verifyToken)(token);
            if (tokenIsVerify) {
                done();
            }
            else {
                return reply.send({
                    statusCode: 401,
                    message: "un-authorized",
                });
            }
        },
    }, async (request, reply) => {
        const allPosts = await (0, prisma_instance_1.PrismaInstance)().post.findMany({
            include: {
                comment: true,
            },
        });
        if (allPosts) {
            return reply.send({
                statusCode: 200,
                message: "All the posts",
                data: allPosts,
            });
        }
        return reply.send({
            statusCode: 401,
            message: "Failed to get all posts",
            data: [],
        });
    });
    fastify.post("/post/create", async (request, reply) => {
        const { body, slug, title, authodId } = request.body;
        const createPost = await (0, prisma_instance_1.PrismaInstance)().post.create({
            data: {
                body: body,
                slug: slug,
                title: title,
                authorId: authodId,
            },
        });
        if (createPost) {
            return reply.send({
                statusCode: 200,
                message: "Create Post successfully",
                data: createPost,
            });
        }
        return reply.send({
            statusCode: 401,
            message: "Failed to create",
            data: [],
        });
    });
}
exports.default = postRoutes;
//# sourceMappingURL=post.routes.js.map