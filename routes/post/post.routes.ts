import { FastifyInstance, FastifyPluginOptions } from "fastify"
import { verifyToken } from "../../utils/jwtService"
import { PrismaInstance } from "../../utils/prisma.instance"
import { ICreatePost } from "./post.types"

export default async function postRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get<{ Headers: { token: string } }>(
    "/api/all-posts",
    {
      onRequest: async (request, reply, done) => {
        const { token } = request.headers

        const tokenIsVerify = await verifyToken(token)

        if (tokenIsVerify) {
          done()
        } else {
          return reply.send({
            statusCode: 401,
            message: "un-authorized",
          })
        }
      },
    },
    async (request, reply) => {
      const allPosts = await PrismaInstance().post.findMany({
        include: {
          comment: true,
        },
      })

      if (allPosts) {
        return reply.send({
          statusCode: 200,
          message: "All the posts",
          data: allPosts,
        })
      }

      return reply.send({
        statusCode: 401,
        message: "Failed to get all posts",
        data: [],
      })
    }
  )

  fastify.post<{ Body: ICreatePost }>(
    "/api/post/create",
    async (request, reply) => {
      const { body, slug, title, authodId } = request.body

      const createPost = await PrismaInstance().post.create({
        data: {
          body: body,
          slug: slug,
          title: title,
          authorId: authodId,
        },
      })

      if (createPost) {
        return reply.send({
          statusCode: 200,
          message: "Create Post successfully",
          data: createPost,
        })
      }

      return reply.send({
        statusCode: 401,
        message: "Failed to create",
        data: [],
      })
    }
  )
}
