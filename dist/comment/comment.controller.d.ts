import { FastifyReply, FastifyRequest } from "fastify";
import { GlobalResponse } from "../utils/response.global";
import { ICreateComment } from "./comment.type";
export declare function PostComment(request: FastifyRequest<{
    Body: ICreateComment;
}>, reply: FastifyReply): Promise<never>;
export declare function GetAllCommentInOnePost(request: FastifyRequest<{
    Querystring: {
        id: string;
    };
}>, reply: FastifyReply): Promise<GlobalResponse>;
