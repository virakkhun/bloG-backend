"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_multer_1 = __importDefault(require("fastify-multer"));
const post_controller_1 = require("./post.controller");
const storage = fastify_multer_1.default.diskStorage({
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}${file.originalname}`);
    },
});
const upload = (0, fastify_multer_1.default)({
    storage: storage,
});
async function postRoutes(fastify) {
    fastify.register(fastify_multer_1.default.contentParser);
    //** Get all post */
    fastify.get("/all", { preHandler: [fastify.authenticate] }, post_controller_1.GetAllPostWithComment);
    //** Create one post */
    fastify.post("/create", {
        preHandler: [fastify.authenticate, upload.single("image")],
    }, post_controller_1.CreateOnePost);
    //** Delete one post by ID */
    fastify.post("/delete", {
        preHandler: [fastify.authenticate],
    }, post_controller_1.DeleteOnePost);
    //** Update one post by ID */
    fastify.post("/update", {
        preHandler: [fastify.authenticate],
    }, post_controller_1.UpdateOnePost);
    fastify.get("/detail", {
        preHandler: [fastify.authenticate],
    }, post_controller_1.GetPostDetail);
}
exports.default = postRoutes;
//# sourceMappingURL=post.routes.js.map