import { FastifyReply, FastifyRequest } from "fastify";
import { GlobalResponse } from "../utils/response.global";
import { ICreatePost, IUpdatePost } from "./post.types";
export declare function GetAllPostWithComment(request: FastifyRequest, reply: FastifyReply): Promise<GlobalResponse>;
export declare function CreateOnePost(request: FastifyRequest<{
    Body: ICreatePost;
}>, reply: FastifyReply): Promise<GlobalResponse>;
export declare function DeleteOnePost(request: FastifyRequest<{
    Querystring: {
        id: string;
    };
}>, reply: FastifyReply): Promise<GlobalResponse>;
export declare function UpdateOnePost(request: FastifyRequest<{
    Querystring: {
        id: string;
    };
    Body: IUpdatePost;
}>, reply: FastifyReply): Promise<GlobalResponse>;
