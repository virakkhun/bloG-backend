import { FastifyInstance } from "fastify"
import { createUser, deleteUser, getUser } from "./user.controller"

export default async function users(fastify: FastifyInstance) {
  fastify.get("/user-info", getUser)
  fastify.post("/user/create", createUser)
  fastify.post("/user/delete", deleteUser)
}
