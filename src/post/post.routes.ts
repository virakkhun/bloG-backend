import { FastifyInstance } from "fastify"
import {
  CreateOnePost,
  DeleteOnePost,
  GetAllPostWithComment,
  UpdateOnePost,
} from "./post.controller"

export default async function postRoutes(fastify: FastifyInstance) {
  //** Get all post */
  fastify.get(
    "/all",
    { preHandler: [fastify.authenticate] },
    GetAllPostWithComment
  )

  //** Create one post */
  fastify.post(
    "/create",
    {
      preHandler: [fastify.authenticate],
    },
    CreateOnePost
  )

  //** Delete one post by ID */
  fastify.post(
    "/delete",
    {
      preHandler: [fastify.authenticate],
    },
    DeleteOnePost
  )

  //** Update one post by ID */
  fastify.post(
    "/update",
    {
      preHandler: [fastify.authenticate],
    },
    UpdateOnePost
  )
}
