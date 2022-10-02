import { FastifyReply, FastifyRequest } from "fastify"
import { GlobalResponse } from "../utils/response.global"
import {
  GetAllCommentInOnePostService,
  PostCommentService,
} from "./comment.service"
import { ICreateComment } from "./comment.type"

export async function PostComment(
  request: FastifyRequest<{ Body: ICreateComment }>,
  reply: FastifyReply
) {
  const { comment, postId } = request.body

  return reply.send(
    await PostCommentService({
      comment: comment,
      postId: postId,
    })
  )
}

export async function GetAllCommentInOnePost(
  request: FastifyRequest<{
    Querystring: { id: string }
  }>,
  reply: FastifyReply
): Promise<GlobalResponse> {
  return reply.send(await GetAllCommentInOnePostService(request.query.id))
}
