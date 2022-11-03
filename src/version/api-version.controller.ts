import { FastifyReply, FastifyRequest } from "fastify"
import { version, author } from "../../package.json"

export async function getApiVersion(
  request: FastifyRequest<{ Body: { email: string } }>,
  reply: FastifyReply
) {
  return reply.send({
    api_version: version,
    author: author,
  })
}
