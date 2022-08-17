"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const fastify_multer_1 = __importDefault(require("fastify-multer"));
const storage = fastify_multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/images/");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}${file.originalname}`);
    },
});
const upload = (0, fastify_multer_1.default)({
    storage: storage,
});
async function users(fastify) {
    fastify.register(fastify_multer_1.default.contentParser);
    fastify.post("/info", {
        preHandler: [fastify.authenticate],
    }, user_controller_1.getUser);
    fastify.post("/create", user_controller_1.createUser);
    fastify.post("/delete", {
        preHandler: [fastify.authenticate],
    }, user_controller_1.deleteUser);
    fastify.post("/update", {
        preHandler: [fastify.authenticate],
    }, user_controller_1.updateOneUser);
    fastify.post("/upload", {
        preHandler: [fastify.authenticate, upload.single("image")],
    }, user_controller_1.UploadImage);
}
exports.default = users;
//# sourceMappingURL=user.routes.js.map