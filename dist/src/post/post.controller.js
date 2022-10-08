"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPostDetail = exports.UpdateOnePost = exports.DeleteOnePost = exports.CreateOnePost = exports.GetAllPostWithComment = void 0;
const s3_service_1 = require("../storage/s3.service");
const post_service_1 = require("./post.service");
async function GetAllPostWithComment(request, reply) {
    return reply.send(await (0, post_service_1.getAllPostService)());
}
exports.GetAllPostWithComment = GetAllPostWithComment;
async function CreateOnePost(request, reply) {
    const data = await (0, s3_service_1.UploadServiceToS3Storage)(request.file);
    const images = data.Location;
    const { authorId, body, slug, title } = request.body;
    return reply.send(await (0, post_service_1.createOnePostService)({
        authorId,
        body,
        slug,
        title,
        images,
    }));
}
exports.CreateOnePost = CreateOnePost;
async function DeleteOnePost(request, reply) {
    return reply.send(await (0, post_service_1.deletePostService)(request.query.id));
}
exports.DeleteOnePost = DeleteOnePost;
async function UpdateOnePost(request, reply) {
    return reply.send(await (0, post_service_1.updatePostService)(request.query.id, request.body));
}
exports.UpdateOnePost = UpdateOnePost;
async function GetPostDetail(request, reply) {
    return reply.send(await (0, post_service_1.getPostService)(request.query.postId));
}
exports.GetPostDetail = GetPostDetail;
//# sourceMappingURL=post.controller.js.map