import fastify, { FastifyReply, FastifyRequest } from "fastify"
import { DatabaseInitial } from "./db.connect"
import commentRoutes from "./comment/comment.route"
import postRoutes from "./post/post.routes"
import users from "./user/user.routes"
import "dotenv/config"
import cors from "@fastify/cors"
import fastifyJwt from "@fastify/jwt"
import { authRoutes } from "./auth/auth.route"

export const server = fastify({
  logger: {
    level: "info",
    transport: {
      target: "pino-pretty",
    },
  },
})

async function main() {
  await DatabaseInitial()
}
main()

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: any
  }

  export interface FastifyRequest {
    file: any
  }
}

server.register(fastifyJwt, {
  secret: process.env.SECRET_KEY ?? "",
})
server.decorate(
  "authenticate",
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify()
    } catch (e) {
      reply.send({ error: e })
    }
  }
)

server.register(cors, {
  origin: true,
  credentials: true,
  allowedHeaders: ["Content-type", "Authorization", "authorization"],
})

server.register(users, {
  prefix: "v1/user",
})
server.register(postRoutes, {
  prefix: "v1/post",
})
server.register(commentRoutes, {
  prefix: "v1/comment",
})
server.register(authRoutes, {
  prefix: "v1/auth",
})

server.listen(
  {
    port: parseInt(process.env.PORT!) || 8000,
    host: "0.0.0.0",
  },
  (err, address) => {
    if (err) {
      console.log(err)
      process.exit(1)
    }
    console.log(`Server is listening on port: ${address}`)
  }
)
