import fastify from "fastify"
import { DatabaseInitial } from "./db.connect"
import commentRoutes from "./routes/comment/comment.route"
import postRoutes from "./routes/post/post.routes"
import users from "./routes/user/user.routes"

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

server.register(users)
server.register(postRoutes)
server.register(commentRoutes)

server.listen(
  {
    port: Number(process.env.PORT) | 8000,
  },
  (err, address) => {
    if (err) {
      console.log(err)
      process.exit(1)
    }
    console.log(`Server is listening on port: ${address}`)
  }
)
