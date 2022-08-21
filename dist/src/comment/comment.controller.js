"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCommentInOnePost = exports.PostComment = void 0;
const message_1 = require("../utils/message");
const repsonse_1 = require("../utils/repsonse");
const statusCode_1 = require("../utils/statusCode");
const comment_service_1 = require("./comment.service");
async function PostComment(request, reply) {
    const { comment, postId } = request.body;
    const newComment = await (0, comment_service_1.PostCommentService)({
        comment: comment,
        postId: postId,
    });
    if (newComment) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.get, newComment));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, []));
}
exports.PostComment = PostComment;
async function GetAllCommentInOnePost(request, reply) {
    const comments = await (0, comment_service_1.GetAllCommentInOnePostService)(request.query.id);
    if (comments) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.get, comments));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, {}));
}
exports.GetAllCommentInOnePost = GetAllCommentInOnePost;
//# sourceMappingURL=comment.controller.js.map