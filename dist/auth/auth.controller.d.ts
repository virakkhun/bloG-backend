import { FastifyReply, FastifyRequest } from "fastify";
import { ILoginUser } from "../user/user.type";
export declare function LoginUser(request: FastifyRequest<{
    Body: ILoginUser;
}>, reply: FastifyReply): Promise<never>;
