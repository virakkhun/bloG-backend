import { IUpdateUser } from "./user.type";
export declare function fineOneByEmailService(email: string): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: import(".prisma/client").User;
}>;
export declare function findOneUserByIdService(id: string): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: import(".prisma/client").User;
}>;
export declare function createOneUserService(email: string, password: string): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: import(".prisma/client").User;
}>;
export declare function deleteOneUserService(id: string): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: import(".prisma/client").User;
}>;
export declare function updateOneUserService(id: string, payload: IUpdateUser): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: import(".prisma/client").User;
}>;
export declare function uploadImageService(id: string, imageName: string): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: import(".prisma/client").User;
}>;
