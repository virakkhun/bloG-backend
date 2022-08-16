import { FastifyInstance } from "fastify"
import { PostComment } from "./comment.controller"

export default async function commentRoutes(fastify: FastifyInstance) {
  fastify.post("/comment/create", PostComment)
}
