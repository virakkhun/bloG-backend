"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCommentInOnePostService = exports.PostCommentService = void 0;
const prisma_instance_1 = require("../utils/prisma.instance");
async function PostCommentService(payload) {
    return await (0, prisma_instance_1.PrismaInstance)().comment.create({
        data: {
            comment: payload.comment,
            postId: payload.postId,
        },
    });
}
exports.PostCommentService = PostCommentService;
async function GetAllCommentInOnePostService(postId) {
    return await (0, prisma_instance_1.PrismaInstance)().comment.findMany({
        where: {
            postId: postId,
        },
    });
}
exports.GetAllCommentInOnePostService = GetAllCommentInOnePostService;
//# sourceMappingURL=comment.service.js.map