import { FastifyInstance, FastifyPluginOptions } from "fastify"
import { PrismaInstance } from "../../utils/prisma.instance"
import { ICreateComment } from "./comment.type"

export default async function commentRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post<{ Body: ICreateComment }>(
    "/comment/create",
    async (request, reply) => {
      const { comment, postId } = request.body

      const newComment = await PrismaInstance().comment.create({
        data: {
          comment: comment,
          postId: postId,
        },
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
  )
}
