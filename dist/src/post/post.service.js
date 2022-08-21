"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostWithCommentService = exports.updatePostService = exports.deletePostService = exports.createOnePostService = exports.getAllPostWithCommentService = void 0;
const prisma_instance_1 = require("../utils/prisma.instance");
async function getAllPostWithCommentService() {
    return await (0, prisma_instance_1.PrismaInstance)().post.findMany({
        include: {
            author: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}
exports.getAllPostWithCommentService = getAllPostWithCommentService;
async function createOnePostService(payload) {
    return await (0, prisma_instance_1.PrismaInstance)().post.create({
        data: {
            body: payload.body,
            slug: payload.slug,
            title: payload.title,
            authorId: payload.authorId,
            createdAt: new Date().toISOString(),
            images: payload.images,
        },
    });
}
exports.createOnePostService = createOnePostService;
async function deletePostService(id) {
    return await (0, prisma_instance_1.PrismaInstance)().post.delete({
        where: {
            id: id,
        },
    });
}
exports.deletePostService = deletePostService;
async function updatePostService(id, payload) {
    return await (0, prisma_instance_1.PrismaInstance)().post.update({
        where: {
            id: id,
        },
        data: {
            title: payload.title,
            body: payload.body,
            slug: payload.slug,
        },
    });
}
exports.updatePostService = updatePostService;
async function getPostWithCommentService(id) {
    return await (0, prisma_instance_1.PrismaInstance)().post.findUnique({
        where: {
            id: id,
        },
    });
}
exports.getPostWithCommentService = getPostWithCommentService;
//# sourceMappingURL=post.service.js.map