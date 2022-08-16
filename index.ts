import fastify from "fastify"
import { DatabaseInitial } from "./db.connect"
import commentRoutes from "./routes/comment/comment.route"
import postRoutes from "./routes/post/post.routes"
import users from "./routes/user/user.routes"
import "dotenv/config"
import cors from "@fastify/cors"
import fastifyMultipart from "@fastify/multipart"

const server = fastify({
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

server.register(cors, {
  origin: true,
  credentials: true,
  allowedHeaders: ["Content-type", "token"],
})
server.register(fastifyMultipart)

server.register(users)
server.register(postRoutes)
server.register(commentRoutes)

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
