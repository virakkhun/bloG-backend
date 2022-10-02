import { FastifyReply, FastifyRequest } from "fastify"
import { UploadServiceToS3Storage } from "../storage/s3.service"
import {
  createOneUserService,
  deleteOneUserService,
  fineOneByEmailService,
  updateOneUserService,
} from "./user.service"
import { ICreateUser, IUpdateUser } from "./user.type"
import { uploadImageService } from "./user.service"

export async function getUser(
  request: FastifyRequest<{ Body: { email: string } }>,
  reply: FastifyReply
) {
  return reply.send(await fineOneByEmailService(request.body.email))
}

export async function createUser(
  request: FastifyRequest<{ Body: ICreateUser }>,
  reply: FastifyReply
) {
  const { email, password } = request.body
  return reply.send(await createOneUserService(email, password))
}

export async function deleteUser(
  request: FastifyRequest<{
    Querystring: {
      id: string
    }
  }>,
  reply: FastifyReply
) {
  return reply.send(await deleteOneUserService(request.query.id))
}

export async function updateOneUser(
  request: FastifyRequest<{
    Querystring: {
      id: string
    }
    Body: IUpdateUser
  }>,
  reply: FastifyReply
) {
  return reply.send(await updateOneUserService(request.query.id, request.body))
}

export async function UploadImage(
  request: FastifyRequest<{
    Querystring: {
      id: string
    }
  }>,
  reply: FastifyReply
) {
  const data = await UploadServiceToS3Storage(request.file)
  return reply.send(await uploadImageService(request.query.id, data.Location))
}
