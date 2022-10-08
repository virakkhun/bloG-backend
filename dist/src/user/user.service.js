"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageService = exports.updateOneUserService = exports.deleteOneUserService = exports.createOneUserService = exports.findOneUserByIdService = exports.fineOneByEmailService = void 0;
const hashing_1 = require("../utils/hashing");
const prisma_instance_1 = require("../utils/prisma.instance");
const repsonse_1 = require("../utils/repsonse");
async function fineOneByEmailService(email) {
    const user = await (0, prisma_instance_1.PrismaInstance)().user.findUnique({
        where: {
            email: email,
        },
    });
    if (!user) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            msg: "Failed",
            data: null,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Get Successfully",
        data: user,
    });
}
exports.fineOneByEmailService = fineOneByEmailService;
async function findOneUserByIdService(id) {
    const findById = await (0, prisma_instance_1.PrismaInstance)().user.findUnique({
        where: {
            id: id,
        },
    });
    if (!findById) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            msg: "Failed",
            data: null,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Get Successfully",
        data: findById,
    });
}
exports.findOneUserByIdService = findOneUserByIdService;
async function createOneUserService(email, password) {
    const { statusCode } = await fineOneByEmailService(email);
    if (statusCode === 401) {
        const createNewUser = await (0, prisma_instance_1.PrismaInstance)().user.create({
            data: {
                email: email,
                password: (0, hashing_1.createHashPassword)(password),
            },
        });
        if (!createNewUser) {
            return (0, repsonse_1.CommonResponse)({
                code: 401,
                msg: "Failed",
                data: null,
            });
        }
        return (0, repsonse_1.CommonResponse)({
            code: 200,
            msg: "Created Successfully",
            data: createNewUser,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 401,
        msg: "Failed",
        data: null,
    });
}
exports.createOneUserService = createOneUserService;
async function deleteOneUserService(id) {
    const deleteUser = await (0, prisma_instance_1.PrismaInstance)().user.delete({
        where: {
            id: id,
        },
    });
    if (!deleteUser) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            msg: "Failed",
            data: null,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Deleted Successfully",
        data: deleteUser,
    });
}
exports.deleteOneUserService = deleteOneUserService;
async function updateOneUserService(id, payload) {
    const updateUser = await (0, prisma_instance_1.PrismaInstance)().user.update({
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
    if (!updateUser) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            msg: "Failed",
            data: null,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Updated Successfully",
        data: updateUser,
    });
}
exports.updateOneUserService = updateOneUserService;
async function uploadImageService(id, imageName) {
    const upload = await (0, prisma_instance_1.PrismaInstance)().user.update({
        where: {
            id: id,
        },
        data: {
            authorImage: imageName,
        },
    });
    if (!upload) {
        return (0, repsonse_1.CommonResponse)({
            code: 401,
            msg: "Failed",
            data: null,
        });
    }
    return (0, repsonse_1.CommonResponse)({
        code: 200,
        msg: "Posted Successfully",
        data: upload,
    });
}
exports.uploadImageService = uploadImageService;
//# sourceMappingURL=user.service.js.map