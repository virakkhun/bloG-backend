"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPostWithComment = exports.UpdateOnePost = exports.DeleteOnePost = exports.CreateOnePost = exports.GetAllPostWithComment = void 0;
const user_service_1 = require("../user/user.service");
const message_1 = require("../utils/message");
const repsonse_1 = require("../utils/repsonse");
const statusCode_1 = require("../utils/statusCode");
const post_service_1 = require("./post.service");
async function GetAllPostWithComment(request, reply) {
    const allPosts = await (0, post_service_1.getAllPostWithComementService)();
    if (allPosts.length !== 0) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.get, allPosts));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, ""));
}
exports.GetAllPostWithComment = GetAllPostWithComment;
async function CreateOnePost(request, reply) {
    const post = await (0, post_service_1.createOnePostService)(request.body);
    if (post) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.created, post));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, ""));
}
exports.CreateOnePost = CreateOnePost;
async function DeleteOnePost(request, reply) {
    const deletePost = await (0, post_service_1.deletePostService)(request.query.id);
    if (deletePost) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.deleted, ""));
    }
    throw new Error(message_1.CommonMessage.failed);
}
exports.DeleteOnePost = DeleteOnePost;
async function UpdateOnePost(request, reply) {
    const update = await (0, post_service_1.updatePostService)(request.query.id, request.body);
    if (update) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.updated, ""));
    }
    throw new Error(message_1.CommonMessage.failed);
}
exports.UpdateOnePost = UpdateOnePost;
async function GetPostWithComment(request, reply) {
    const post = await (0, post_service_1.getPostWithCommentService)(request.query.postId);
    if (post) {
        const user = await (0, user_service_1.findOneUserByIdService)(post.authorId);
        if (user) {
            return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.get, {
                post: post,
                user: user,
            }));
        }
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, {}));
}
exports.GetPostWithComment = GetPostWithComment;
//# sourceMappingURL=post.controller.js.map