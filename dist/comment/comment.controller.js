"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostComment = void 0;
const comment_service_1 = require("./comment.service");
async function PostComment(request, reply) {
    const { comment, postId } = request.body;
    const newComment = await (0, comment_service_1.PostCommentService)({
        comment: comment,
        postId: postId,
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
}
exports.PostComment = PostComment;
//# sourceMappingURL=comment.controller.js.map