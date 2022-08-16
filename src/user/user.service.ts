import { createHashPassword } from "../utils/hashing"
import { PrismaInstance } from "../utils/prisma.instance"

export async function fineOneByEmail(email: string) {
  return await PrismaInstance().user.findUnique({
    where: {
      email: email,
    },
  })
}

export async function createOneUser(email: string, password: string) {
  return await PrismaInstance().user.create({
    data: {
      email: email,
      password: createHashPassword(password),
    },
  })
}

export async function deleteOneUser(id: string) {
  return await PrismaInstance().user.delete({
    where: {
      id: id,
    },
  })
}
