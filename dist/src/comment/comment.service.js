"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCommentInOnePostService = exports.PostCommentService = void 0;
const prisma_instance_1 = require("../utils/prisma.instance");
const repsonse_1 = require("../utils/repsonse");
async function PostCommentService(payload) {
    const comment = await (0, prisma_instance_1.PrismaInstance)().comment.create({
        data: {
            comment: payload.comment,
            postId: payload.postId,
        },
    });
    if (!comment) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            msg: "Failed",
            data: null,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Posted Successfully",
        data: comment,
    });
}
exports.PostCommentService = PostCommentService;
async function GetAllCommentInOnePostService(postId) {
    const postInComment = await (0, prisma_instance_1.PrismaInstance)().comment.findMany({
        where: {
            postId: postId,
        },
    });
    if (!postInComment) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            msg: "Failed",
            data: null,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Get Successfully",
        data: postInComment,
    });
}
exports.GetAllCommentInOnePostService = GetAllCommentInOnePostService;
//# sourceMappingURL=comment.service.js.map