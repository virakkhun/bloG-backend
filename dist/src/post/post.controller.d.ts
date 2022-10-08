import { FastifyReply, FastifyRequest } from "fastify";
import { ICreatePost, IUpdatePost } from "./post.types";
export declare function GetAllPostWithComment(request: FastifyRequest, reply: FastifyReply): Promise<never>;
export declare function CreateOnePost(request: FastifyRequest<{
    Body: ICreatePost;
}>, reply: FastifyReply): Promise<never>;
export declare function DeleteOnePost(request: FastifyRequest<{
    Querystring: {
        id: string;
    };
}>, reply: FastifyReply): Promise<never>;
export declare function UpdateOnePost(request: FastifyRequest<{
    Querystring: {
        id: string;
    };
    Body: IUpdatePost;
}>, reply: FastifyReply): Promise<never>;
export declare function GetPostDetail(request: FastifyRequest<{
    Querystring: {
        postId: string;
    };
}>, reply: FastifyReply): Promise<never>;
