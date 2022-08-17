import { FastifyInstance } from "fastify"
import { LoginUser } from "./auth.controller"

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/login", LoginUser)
}
