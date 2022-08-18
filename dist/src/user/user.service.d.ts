import { IUpdateUser } from "./user.type";
export declare function fineOneByEmailService(email: string): Promise<import(".prisma/client").User | null>;
export declare function createOneUserService(email: string, password: string): Promise<import(".prisma/client").User>;
export declare function deleteOneUserService(id: string): Promise<import(".prisma/client").User>;
export declare function updateOneUserService(id: string, payload: IUpdateUser): Promise<import(".prisma/client").User>;
export declare function uploadImageService(id: string, imageName: string): Promise<import(".prisma/client").User>;
export declare function findOneUserByIdService(id: string): Promise<import(".prisma/client").User | null>;
