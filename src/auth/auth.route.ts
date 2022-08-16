import { FastifyInstance } from "fastify"
import { LoginUser } from "./auth.controller"

export async function authRoute(fastify: FastifyInstance) {
  fastify.post("/auth/login", LoginUser)
}
