import { FastifyReply, FastifyRequest } from "fastify"
import { CommonMessage } from "../utils/message"
import { CommonResponse } from "../utils/repsonse"
import { GlobalResponse } from "../utils/response.global"
import { StatusCode } from "../utils/statusCode"
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

  const newComment = await PostCommentService({
    comment: comment,
    postId: postId,
  })

  if (newComment) {
    return reply.send(
      CommonResponse<typeof newComment>(
        StatusCode.success,
        CommonMessage.get,
        newComment
      )
    )
  }

  return reply.send(
    CommonResponse<typeof Array[]>(
      StatusCode.failed,
      CommonMessage.failed,
      []
    )
  )
}

export async function GetAllCommentInOnePost(
  request: FastifyRequest<{
    Querystring: { id: string }
  }>,
  reply: FastifyReply
): Promise<GlobalResponse> {
  const comments = await GetAllCommentInOnePostService(request.query.id)

  if (comments) {
    return reply.send(
      CommonResponse<typeof comments>(
        StatusCode.success,
        CommonMessage.get,
        comments
      )
    )
  }

  return reply.send(
    CommonResponse(
      StatusCode.failed,
      CommonMessage.failed,
      {  }
    )
  )
}
