import { User } from "@prisma/client"
import { FastifyInstance, FastifyPluginOptions } from "fastify"
import { compareHash, createHashPassword } from "../../utils/hashing"
import { generateToken } from "../../utils/jwtService"
import { PrismaInstance } from "../../utils/prisma.instance"
import { ICreateUser, ILoginUser } from "./user.type"

export default async function users(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/all-users", async (request, reply) => {
    const users = await PrismaInstance().user.findMany({
      include: {
        posts: true,
      },
    })

    return reply.send({
      data: users,
    })
  })

  fastify.post<{
    Body: ICreateUser
  }>("/user/create", async (request, reply) => {
    const { email, password } = request.body
    const hashPassword = createHashPassword(password)
    const newUser: User = await PrismaInstance().user.create({
      data: {
        email: email,
        password: hashPassword,
      },
    })

    if (!newUser) {
      return reply.send({
        statusCode: 401,
        message: "Failed to create a new user",
        data: {},
      })
    }

    return reply.send({
      statusCode: 200,
      message: "Created successfully",
      data: newUser,
    })
  })

  fastify.post<{
    Querystring: { id: string }
  }>("/user/delete", async (request, reply) => {
    const { id } = request.query

    const deleteUser = await PrismaInstance().user.delete({
      where: {
        id: id,
      },
    })

    if (deleteUser) {
      return reply.send({
        statusCode: 200,
        message: "Deleted successfully",
      })
    }

    return reply.send({
      statusCode: 401,
      message: "Failed to delete",
    })
  })

  fastify.post<{
    Body: ILoginUser
  }>("/user/login", async (request, reply) => {
    const { email, password } = request.body

    const userLogin = await PrismaInstance().user.findFirst({
      where: {
        email: email,
      },
    })

    if (userLogin !== null) {
      const serealizePassword = compareHash(password!, userLogin.password)

      if (serealizePassword) {
        const token = await generateToken<typeof userLogin>(userLogin)
        return reply.send({
          statusCode: 200,
          message: "Login successfully",
          data: {
            access_token: token,
          },
        })
      }

      return reply.send({
        statusCode: 301,
        message: "Password doesn't not match!!",
      })
    }

    return reply.send({
      statusCode: 301,
      message: "No user found",
    })
  })
}
