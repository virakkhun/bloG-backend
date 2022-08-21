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
): Promise<GlobalResponse> {
  const user = await fineOneByEmailService(request.body.email)
  if(user) {
    const {password, ...rest} = user
    return reply.send(
      CommonResponse<typeof rest>(
        StatusCode.success,
        CommonMessage.get,
        rest
      )
    )
  }

  return reply.send(
    CommonResponse(
      StatusCode.failed,
      CommonMessage.failed,
      {}
    )
  )
}

export async function createUser(
  request: FastifyRequest<{ Body: ICreateUser }>,
  reply: FastifyReply
): Promise<GlobalResponse> {
  const { email, password } = request.body
  const newUser = await createOneUserService(email, password)

  if (!newUser) {
    return reply.send(
      CommonResponse(StatusCode.failed, CommonMessage.failed, {})
    )
  }

  return reply.send(
    CommonResponse<typeof newUser>(StatusCode.success, CommonMessage.created, newUser)
  )
}

export async function deleteUser(
  request: FastifyRequest<{
    Querystring: {
      id: string
    }
  }>,
  reply: FastifyReply
): Promise<GlobalResponse> {
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
  const updateUser = await updateOneUserService(request.query.id, request.body)
  if (updateUser) {
    const { password, ...data } = updateUser
    return reply.send(
      CommonResponse<typeof data>(
        StatusCode.success,
        CommonMessage.updated,
        data
      )
    )
  }

  return reply.send(
    CommonResponse(
      StatusCode.failed,
      CommonMessage.failed,
      ""
    )
  )
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
      CommonResponse(
        StatusCode.success,
        CommonMessage.created,
        {},
      )
    )
  }

  return reply.send(
    CommonResponse(
      StatusCode.failed,
      CommonMessage.failed,
      ""
    )
  )
}
