import { FastifyInstance } from "fastify"
import { getApiVersion } from "./api-version.controller"

export default async function apiVersion(fastify: FastifyInstance) {
  fastify.get("/api_version", getApiVersion)
}
