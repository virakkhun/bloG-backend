import { FastifyReply, FastifyRequest } from "fastify";
import { GlobalResponse } from "../utils/response.global";
import { ICreateUser, IUpdateUser } from "./user.type";
export declare function getUser(request: FastifyRequest<{
    Body: {
        email: string;
    };
}>, reply: FastifyReply): Promise<never>;
export declare function createUser(request: FastifyRequest<{
    Body: ICreateUser;
}>, reply: FastifyReply): Promise<never>;
export declare function deleteUser(request: FastifyRequest<{
    Querystring: {
        id: string;
    };
}>, reply: FastifyReply): Promise<never>;
export declare function updateOneUser(request: FastifyRequest<{
    Querystring: {
        id: string;
    };
    Body: IUpdateUser;
}>, reply: FastifyReply): Promise<GlobalResponse>;
export declare function UploadImage(request: FastifyRequest<{
    Querystring: {
        id: string;
    };
}>, reply: FastifyReply): Promise<never>;
