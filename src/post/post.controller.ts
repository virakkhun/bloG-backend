import { FastifyReply, FastifyRequest } from "fastify"
import { CommonMessage } from "../utils/message"
import { CommonResponse } from "../utils/repsonse"
import { GlobalResponse } from "../utils/response.global"
import { StatusCode } from "../utils/statusCode"
import {
  createOnePostService,
  deletePostService,
  getAllPostWithComementService,
  updatePostService,
} from "./post.service"
import { ICreatePost, IUpdatePost } from "./post.types"

export async function GetAllPostWithComment(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<GlobalResponse> {
  const allPosts = await getAllPostWithComementService()

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
): Promise<GlobalResponse> {
  const post = await createOnePostService(request.body)

  if (post) {
    return reply.send(
      CommonResponse(StatusCode.success, CommonMessage.created, post)
    )
  }

  return reply.send(CommonResponse(StatusCode.failed, CommonMessage.failed, ""))
}

export async function DeleteOnePost(
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
): Promise<GlobalResponse> {
  const deletePost = await deletePostService(request.query.id)

  if (deletePost) {
    return reply.send(
      CommonResponse(StatusCode.success, CommonMessage.deleted, "")
    )
  }

  throw new Error(CommonMessage.failed)
}

export async function UpdateOnePost(
  request: FastifyRequest<{
    Querystring: { id: string }
    Body: IUpdatePost
  }>,
  reply: FastifyReply
): Promise<GlobalResponse> {
  const update = await updatePostService(request.query.id, request.body)

  if (update) {
    return reply.send(
      CommonResponse(StatusCode.success, CommonMessage.updated, "")
    )
  }

  throw new Error(CommonMessage.failed)
}
