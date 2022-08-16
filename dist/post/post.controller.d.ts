import { FastifyReply, FastifyRequest } from "fastify";
import { ICreatePost } from "./post.types";
export declare function GetAllPostWithComment(request: FastifyRequest, reply: FastifyReply): Promise<never>;
export declare function CreateOnePost(request: FastifyRequest<{
    Body: ICreatePost;
}>, reply: FastifyReply): Promise<never>;
