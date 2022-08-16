import { User } from "@prisma/client"
import { FastifyReply, FastifyRequest } from "fastify"
import { CommonMessage } from "../utils/message"
import { CommonResponse } from "../utils/repsonse"
import { StatusCode } from "../utils/statusCode"
import { createOneUser, deleteOneUser, fineOneByEmail } from "./user.service"
import { ICreateUser } from "./user.type"

export async function getUser(
  request: FastifyRequest<{ Body: { email: string } }>,
  reply: FastifyReply
) {
  const user = await fineOneByEmail(request.body.email)

  return reply.send(CommonResponse(StatusCode.success, CommonMessage.get, user))
}

export async function createUser(
  request: FastifyRequest<{ Body: ICreateUser }>,
  reply: FastifyReply
) {
  const { email, password } = request.body
  const newUser: User = await createOneUser(email, password)

  if (!newUser) {
    return reply.send(
      CommonResponse(StatusCode.failed, CommonMessage.failed, {})
    )
  }

  return reply.send(
    CommonResponse(StatusCode.success, CommonMessage.created, newUser)
  )
}

export async function deleteUser(
  request: FastifyRequest<{
    Querystring: {
      id: string
    }
  }>,
  reply: FastifyReply
) {
  const isDeleteSuccess = await deleteOneUser(request.query.id)

  if (isDeleteSuccess) {
    return reply.send(
      CommonResponse(StatusCode.success, CommonMessage.deleted, isDeleteSuccess)
    )
  }

  return reply.send(CommonResponse(StatusCode.failed, CommonMessage.failed, ""))
}
