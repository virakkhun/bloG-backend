"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageService = exports.updateOneUserService = exports.deleteOneUserService = exports.createOneUserService = exports.fineOneByEmailService = void 0;
const hashing_1 = require("../utils/hashing");
const prisma_instance_1 = require("../utils/prisma.instance");
async function fineOneByEmailService(email) {
    return await (0, prisma_instance_1.PrismaInstance)().user.findUnique({
        where: {
            email: email,
        },
    });
}
exports.fineOneByEmailService = fineOneByEmailService;
async function createOneUserService(email, password) {
    return await (0, prisma_instance_1.PrismaInstance)().user.create({
        data: {
            email: email,
            password: (0, hashing_1.createHashPassword)(password),
        },
    });
}
exports.createOneUserService = createOneUserService;
async function deleteOneUserService(id) {
    return await (0, prisma_instance_1.PrismaInstance)().user.delete({
        where: {
            id: id,
        },
    });
}
exports.deleteOneUserService = deleteOneUserService;
async function updateOneUserService(id, payload) {
    return await (0, prisma_instance_1.PrismaInstance)().user.update({
        where: {
            id: id,
        },
        data: {
            age: payload.age,
            email: payload.email,
            gender: payload.gender,
            name: payload.name,
            status: payload.status,
        },
    });
}
exports.updateOneUserService = updateOneUserService;
async function uploadImageService(id, imageName) {
    return await (0, prisma_instance_1.PrismaInstance)().user.update({
        where: {
            id: id,
        },
        data: {
            image: imageName,
        },
    });
}
exports.uploadImageService = uploadImageService;
//# sourceMappingURL=user.service.js.map