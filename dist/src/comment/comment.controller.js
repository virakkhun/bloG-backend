"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCommentInOnePost = exports.PostComment = void 0;
const comment_service_1 = require("./comment.service");
async function PostComment(request, reply) {
    const { comment, postId } = request.body;
    return reply.send(await (0, comment_service_1.PostCommentService)({
        comment: comment,
        postId: postId,
    }));
}
exports.PostComment = PostComment;
async function GetAllCommentInOnePost(request, reply) {
    return reply.send(await (0, comment_service_1.GetAllCommentInOnePostService)(request.query.id));
}
exports.GetAllCommentInOnePost = GetAllCommentInOnePost;
//# sourceMappingURL=comment.controller.js.map