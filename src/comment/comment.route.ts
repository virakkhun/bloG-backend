import { FastifyInstance } from "fastify"
import { GetAllCommentInOnePost, PostComment } from "./comment.controller"

export default async function commentRoutes(fastify: FastifyInstance) {
  fastify.post("/create", PostComment)
  fastify.get("/post", GetAllCommentInOnePost)
}
