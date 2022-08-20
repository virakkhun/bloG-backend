import { FastifyReply, FastifyRequest } from "fastify"
import { UploadServiceToS3Storage } from "../storage/s3.service"
import { CommonMessage } from "../utils/message"
import { CommonResponse } from "../utils/repsonse"
import { GlobalResponse } from "../utils/response.global"
import { StatusCode } from "../utils/statusCode"
import {
  createOneUserService,
  deleteOneUserService,
  fineOneByEmailService,
  updateOneUserService,
  uploadImageService,
} from "./user.service"
import { ICreateUser, IUpdateUser } from "./user.type"

export async function getUser(
  request: FastifyRequest<{ Body: { email: string } }>,
  reply: FastifyReply
) {
  const user = await fineOneByEmailService(request.body.email)

  return reply.send(CommonResponse(StatusCode.success, CommonMessage.get, user))
}

export async function createUser(
  request: FastifyRequest<{ Body: ICreateUser }>,
  reply: FastifyReply
) {
  const { email, password } = request.body
  const newUser = await createOneUserService(email, password)

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
  const isDeleteSuccess = await deleteOneUserService(request.query.id)

  if (isDeleteSuccess) {
    return reply.send(
      CommonResponse(StatusCode.success, CommonMessage.deleted, isDeleteSuccess)
    )
  }

  return reply.send(CommonResponse(StatusCode.failed, CommonMessage.failed, ""))
}

export async function updateOneUser(
  request: FastifyRequest<{
    Querystring: {
      id: string
    }
    Body: IUpdateUser
  }>,
  reply: FastifyReply
): Promise<GlobalResponse> {
  const update = await updateOneUserService(request.query.id, request.body)

  if (update) {
    return reply.send(
      CommonResponse<typeof update>(
        StatusCode.success,
        CommonMessage.updated,
        update
      )
    )
  }

  return reply.send(CommonResponse(StatusCode.failed, CommonMessage.failed, ""))
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

  const upload = await uploadImageService(request.query.id, data.Location)
  if (upload) {
    return reply.send(
      CommonResponse(StatusCode.success, CommonMessage.created, upload)
    )
  }

  return reply.send(CommonResponse(StatusCode.failed, CommonMessage.failed, ""))
}
