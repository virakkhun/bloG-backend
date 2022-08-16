import { FastifyReply, FastifyRequest } from "fastify"
import { CommonMessage } from "../utils/message"
import { CommonResponse } from "../utils/repsonse"
import { StatusCode } from "../utils/statusCode"
import { createOnePost, getAllPostWithComement } from "./post.service"
import { ICreatePost } from "./post.types"

export async function GetAllPostWithComment(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const allPosts = await getAllPostWithComement()

  if (allPosts.length !== 0) {
    return reply.send(
      CommonResponse(StatusCode.success, CommonMessage.get, allPosts)
    )
  }

  return reply.send(CommonResponse(StatusCode.failed, CommonMessage.failed, ""))
}

export async function CreateOnePost(
  request: FastifyRequest<{ Body: ICreatePost }>,
  reply: FastifyReply
) {
  const post = await createOnePost(request.body)

  if (post) {
    return reply.send(
      CommonResponse(StatusCode.success, CommonMessage.created, post)
    )
  }

  return reply.send(CommonResponse(StatusCode.failed, CommonMessage.failed, ""))
}
