import { FastifyReply, FastifyRequest } from "fastify"
import { UploadServiceToS3Storage } from "../storage/s3.service"

import {
  createOnePostService,
  deletePostService,
  getAllPostService,
  updatePostService,
  getPostService,
} from "./post.service"
import { ICreatePost, IUpdatePost } from "./post.types"

export async function GetAllPostWithComment(
  request: FastifyRequest,
  reply: FastifyReply
) {
  return reply.send(await getAllPostService())
}

export async function CreateOnePost(
  request: FastifyRequest<{ Body: ICreatePost }>,
  reply: FastifyReply
) {
  const data = await UploadServiceToS3Storage(request.file)
  const images = data.Location
  const { authorId, body, slug, title } = request.body

  return reply.send(
    await createOnePostService({
      authorId,
      body,
      slug,
      title,
      images,
    })
  )
}

export async function DeleteOnePost(
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
) {
  return reply.send(await deletePostService(request.query.id))
}

export async function UpdateOnePost(
  request: FastifyRequest<{
    Querystring: { id: string }
    Body: IUpdatePost
  }>,
  reply: FastifyReply
) {
  return reply.send(await updatePostService(request.query.id, request.body))
}

export async function GetPostDetail(
  request: FastifyRequest<{
    Querystring: {
      postId: string
    }
  }>,
  reply: FastifyReply
) {
  return reply.send(await getPostService(request.query.postId))
}
