"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostService = exports.updatePostService = exports.deletePostService = exports.createOnePostService = exports.getAllPostService = void 0;
const prisma_instance_1 = require("../utils/prisma.instance");
const repsonse_1 = require("../utils/repsonse");
async function getAllPostService() {
    const allPosts = await (0, prisma_instance_1.PrismaInstance)().post.findMany({
        include: {
            author: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    if (allPosts.length === 0) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            data: null,
            msg: "Failed",
        });
    }
    let data = [];
    allPosts.forEach((post) => {
        const { id, body, slug, title, authorId, images } = post;
        const { name, status, authorImage } = post.author;
        data.push({
            id,
            body,
            slug,
            title,
            authorId,
            name,
            status,
            images,
            authorImage,
        });
    });
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Get Successfully",
        data: data,
    });
}
exports.getAllPostService = getAllPostService;
async function createOnePostService(payload) {
    const post = await (0, prisma_instance_1.PrismaInstance)().post.create({
        data: {
            body: payload.body,
            slug: payload.slug,
            title: payload.title,
            authorId: payload.authorId,
            createdAt: new Date().toISOString(),
            images: payload.images,
        },
    });
    if (!post) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            msg: "Failed",
            data: null,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Created Successfully",
        data: post,
    });
}
exports.createOnePostService = createOnePostService;
async function deletePostService(id) {
    const deletePost = await (0, prisma_instance_1.PrismaInstance)().post.delete({
        where: {
            id: id,
        },
    });
    if (!deletePost) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            msg: "Failed",
            data: null,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Deleted Successfully",
        data: deletePost,
    });
}
exports.deletePostService = deletePostService;
async function updatePostService(id, payload) {
    const update = await (0, prisma_instance_1.PrismaInstance)().post.update({
        where: {
            id: id,
        },
        data: {
            title: payload.title,
            body: payload.body,
            slug: payload.slug,
        },
    });
    if (!update) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            msg: "Failed",
            data: null,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Updated Successfully",
        data: update,
    });
}
exports.updatePostService = updatePostService;
async function getPostService(id) {
    const getPost = await (0, prisma_instance_1.PrismaInstance)().post.findUnique({
        where: {
            id: id,
        },
        include: {
            author: true,
            comment: true,
        },
    });
    if (!getPost) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            msg: "Failed",
            data: null,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Get Successfully",
        data: getPost,
    });
}
exports.getPostService = getPostService;
//# sourceMappingURL=post.service.js.map