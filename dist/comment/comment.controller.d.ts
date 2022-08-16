import { FastifyReply, FastifyRequest } from "fastify";
import { ICreateComment } from "./comment.type";
export declare function PostComment(request: FastifyRequest<{
    Body: ICreateComment;
}>, reply: FastifyReply): Promise<never>;
