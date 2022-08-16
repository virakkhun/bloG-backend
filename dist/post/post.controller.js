"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePost = exports.GetAllPostWithComment = void 0;
const message_1 = require("../utils/message");
const repsonse_1 = require("../utils/repsonse");
const statusCode_1 = require("../utils/statusCode");
const post_service_1 = require("./post.service");
async function GetAllPostWithComment(request, reply) {
    const allPosts = await (0, post_service_1.getAllPostWithComement)();
    if (allPosts.length !== 0) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.get, allPosts));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, ""));
}
exports.GetAllPostWithComment = GetAllPostWithComment;
async function CreateOnePost(request, reply) {
    const post = await (0, post_service_1.createOnePost)(request.body);
    if (post) {
        return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.success, message_1.CommonMessage.created, post));
    }
    return reply.send((0, repsonse_1.CommonResponse)(statusCode_1.StatusCode.failed, message_1.CommonMessage.failed, ""));
}
exports.CreateOnePost = CreateOnePost;
//# sourceMappingURL=post.controller.js.map