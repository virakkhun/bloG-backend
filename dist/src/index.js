"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const fastify_1 = __importDefault(require("fastify"));
const db_connect_1 = require("./db.connect");
const comment_route_1 = __importDefault(require("./comment/comment.route"));
const post_routes_1 = __importDefault(require("./post/post.routes"));
const user_routes_1 = __importDefault(require("./user/user.routes"));
require("dotenv/config");
const cors_1 = __importDefault(require("@fastify/cors"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const auth_route_1 = require("./auth/auth.route");
exports.server = (0, fastify_1.default)({
    logger: {
        level: "info",
        transport: {
            target: "pino-pretty",
        },
    },
});
async function main() {
    await (0, db_connect_1.DatabaseInitial)();
}
main();
exports.server.register(jwt_1.default, {
    secret: (_a = process.env.SECRET_KEY) !== null && _a !== void 0 ? _a : "",
});
exports.server.decorate("authenticate", async (request, reply) => {
    try {
        await request.jwtVerify();
    }
    catch (e) {
        reply.send({ error: e });
    }
});
exports.server.register(cors_1.default, {
    origin: true,
    allowedHeaders: ["Content-Type", "Authorization"],
});
exports.server.register(user_routes_1.default, {
    prefix: "v1/user",
});
exports.server.register(post_routes_1.default, {
    prefix: "v1/post",
});
exports.server.register(comment_route_1.default, {
    prefix: "v1/comment",
});
exports.server.register(auth_route_1.authRoutes, {
    prefix: "v1/auth",
});
exports.server.listen({
    port: parseInt(process.env.PORT) || 8000,
    host: "0.0.0.0",
}, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is listening on port: ${address}`);
});
//# sourceMappingURL=index.js.map