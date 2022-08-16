"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneUser = exports.createOneUser = exports.fineOneByEmail = void 0;
const hashing_1 = require("../utils/hashing");
const prisma_instance_1 = require("../utils/prisma.instance");
async function fineOneByEmail(email) {
    return await (0, prisma_instance_1.PrismaInstance)().user.findUnique({
        where: {
            email: email,
        },
    });
}
exports.fineOneByEmail = fineOneByEmail;
async function createOneUser(email, password) {
    return await (0, prisma_instance_1.PrismaInstance)().user.create({
        data: {
            email: email,
            password: (0, hashing_1.createHashPassword)(password),
        },
    });
}
exports.createOneUser = createOneUser;
async function deleteOneUser(id) {
    return await (0, prisma_instance_1.PrismaInstance)().user.delete({
        where: {
            id: id,
        },
    });
}
exports.deleteOneUser = deleteOneUser;
//# sourceMappingURL=user.service.js.map