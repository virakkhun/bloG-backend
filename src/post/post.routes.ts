import { FastifyInstance } from "fastify"
import { CreateOnePost, GetAllPostWithComment } from "./post.controller"

export default async function postRoutes(fastify: FastifyInstance) {
  fastify.get("/all-posts", GetAllPostWithComment)
  fastify.post("/post/create", CreateOnePost)
}
