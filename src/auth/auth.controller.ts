import { FastifyReply, FastifyRequest } from "fastify"
import { ILoginUser } from "../user/user.type"
import { CommonMessage } from "../utils/message"
import { CommonResponse } from "../utils/repsonse"
import { StatusCode } from "../utils/statusCode"
import { loginService } from "./auth.service"

export async function LoginUser(
  request: FastifyRequest<{ Body: ILoginUser }>,
  reply: FastifyReply
) {
  const token = await loginService(request.body)

  if (token !== "") {
    return reply.send(
      CommonResponse(StatusCode.success, CommonMessage.login, token)
    )
  }

  return reply.send(CommonResponse(StatusCode.failed, CommonMessage.failed, ""))
}
