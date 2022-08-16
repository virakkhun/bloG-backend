import { FastifyReply, FastifyRequest } from "fastify"
import { PostCommentService } from "./comment.service"
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
    return reply.send({
      statusCode: 200,
      message: "Create comment successfully",
      data: newComment,
    })
  }

  return reply.send({
    statusCode: 401,
    message: "Failed to create comment!",
    data: [],
  })
}
