"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOnePost = exports.getAllPostWithComement = void 0;
const prisma_instance_1 = require("../utils/prisma.instance");
async function getAllPostWithComement() {
    return await (0, prisma_instance_1.PrismaInstance)().post.findMany({
        include: {
            comment: true,
        },
    });
}
exports.getAllPostWithComement = getAllPostWithComement;
async function createOnePost(payload) {
    return await (0, prisma_instance_1.PrismaInstance)().post.create({
        data: {
            body: payload.body,
            slug: payload.slug,
            title: payload.title,
            authorId: payload.authorId,
        },
    });
}
exports.createOnePost = createOnePost;
//# sourceMappingURL=post.service.js.map