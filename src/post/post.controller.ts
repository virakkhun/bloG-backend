import { FastifyReply, FastifyRequest } from "fastify"
import { UploadServiceToS3Storage } from "../storage/s3.service"
import { findOneUserByIdService } from "../user/user.service"
import { CommonMessage } from "../utils/message"
import { CommonResponse } from "../utils/repsonse"
import { GlobalResponse } from "../utils/response.global"
import { StatusCode } from "../utils/statusCode"
import {
  createOnePostService,
  deletePostService,
  getAllPostWithCommentService,
  getPostWithCommentService,
  updatePostService,
} from "./post.service"
import { ICreatePost, IUpdatePost } from "./post.types"

export async function GetAllPostWithComment(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<GlobalResponse> {
  const allPosts = await getAllPostWithCommentService()
  if (allPosts.length !== 0) {
    let data: Partial<GlobalResponse>[] = []
    allPosts.forEach((post) => {
      const { id, body, slug, title, authorId, images } = post
      const { name, status, authorImage } = post.author
      data.push({
        id,
        body,
        slug,
        title,
        authorId,
        name,
        status,
        images,
        authorImage,
      })
    })
    return reply.send(
      CommonResponse(StatusCode.success, CommonMessage.get, data)
    )
  }

  return reply.send(CommonResponse(StatusCode.failed, CommonMessage.failed, {}))
}

export async function CreateOnePost(
  request: FastifyRequest<{ Body: ICreatePost }>,
  reply: FastifyReply
): Promise<GlobalResponse> {
  const data = await UploadServiceToS3Storage(request.file)
  const images = data.Location
  const { authorId, body, slug, title } = request.body

  const post = await createOnePostService({
    authorId,
    body,
    slug,
    title,
    images,
  })

  if (post) {
    return reply.send(
      CommonResponse<typeof post>(
        StatusCode.success,
        CommonMessage.created,
        post
      )
    )
  }

  return reply.send(CommonResponse(StatusCode.failed, CommonMessage.failed, {}))
}

export async function DeleteOnePost(
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
): Promise<GlobalResponse> {
  const deletePost = await deletePostService(request.query.id)

  if (deletePost) {
    return reply.send(
      CommonResponse(StatusCode.success, CommonMessage.deleted, {})
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

export async function GetPostDetail(
  request: FastifyRequest<{
    Querystring: {
      postId: string
    }
  }>,
  reply: FastifyReply
): Promise<GlobalResponse> {
  const post = await getPostWithCommentService(request.query.postId)
  if (post) {
    const user = await findOneUserByIdService(post.authorId)
    if (user) {
      const { name, status, authorImage } = user
      return reply.send(
        CommonResponse(StatusCode.success, CommonMessage.get, {
          post: post,
          user: {
            name,
            status,
            authorImage,
          },
        })
      )
    }
  }

  return reply.send(CommonResponse(StatusCode.failed, CommonMessage.failed, {}))
}
