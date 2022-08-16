import { FastifyReply, FastifyRequest } from "fastify";
import { ICreateUser } from "./user.type";
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
