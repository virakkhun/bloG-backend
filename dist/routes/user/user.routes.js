"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashing_1 = require("../../utils/hashing");
const jwtService_1 = require("../../utils/jwtService");
const prisma_instance_1 = require("../../utils/prisma.instance");
async function users(fastify, options) {
    fastify.get("/all-users", async (request, reply) => {
        const users = await (0, prisma_instance_1.PrismaInstance)().user.findMany({
            include: {
                posts: true,
            },
        });
        return reply.send({
            data: users,
        });
    });
    fastify.post("/user/create", async (request, reply) => {
        const { email, password, image, name } = request.body;
        const hashPassword = (0, hashing_1.createHashPassword)(password);
        const newUser = await (0, prisma_instance_1.PrismaInstance)().user.create({
            data: {
                email: email,
                password: hashPassword,
                image: image,
                name: name,
            },
        });
        if (!newUser) {
            return reply.send({
                statusCode: 401,
                message: "Failed to create a new user",
                data: {},
            });
        }
        return reply.send({
            statusCode: 200,
            message: "Created successfully",
            data: newUser,
        });
    });
    fastify.post("/user/delete", async (request, reply) => {
        const { id } = request.query;
        const deleteUser = await (0, prisma_instance_1.PrismaInstance)().user.delete({
            where: {
                id: id,
            },
        });
        if (deleteUser) {
            return reply.send({
                statusCode: 200,
                message: "Deleted successfully",
            });
        }
        return reply.send({
            statusCode: 401,
            message: "Failed to delete",
        });
    });
    fastify.post("/user/login", async (request, reply) => {
        const { email, password } = request.body;
        const userLogin = await (0, prisma_instance_1.PrismaInstance)().user.findFirst({
            where: {
                email: email,
            },
        });
        if (userLogin !== null) {
            const serealizePassword = (0, hashing_1.compareHash)(password, userLogin.password);
            if (serealizePassword) {
                const token = await (0, jwtService_1.generateToken)(userLogin);
                return reply.send({
                    statusCode: 200,
                    message: "Login successfully",
                    data: {
                        access_token: token,
                    },
                });
            }
            return reply.send({
                statusCode: 301,
                message: "Password doesn't not match!!",
            });
        }
        return reply.send({
            statusCode: 301,
            message: "No user found",
        });
    });
}
exports.default = users;
//# sourceMappingURL=user.routes.js.map