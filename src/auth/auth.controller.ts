import { FastifyReply, FastifyRequest } from "fastify"
import { ILoginUser } from "../user/user.type"
import { CommonResponse } from "../utils/repsonse"
import { loginService } from "./auth.service"

export async function LoginUser(
  request: FastifyRequest<{ Body: ILoginUser }>,
  reply: FastifyReply
) {
  const token = await loginService(request.body)

  if (token === "") {
    return reply.send(
      CommonResponse({
        code: 401,
        data: null,
        msg: "Failed",
      })
    )
  }

  return reply.send(
    CommonResponse({
      code: 200,
      msg: "Logined Successfully",
      data: token,
    })
  )
}
