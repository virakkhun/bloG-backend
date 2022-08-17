import { createHashPassword } from "../utils/hashing"
import { PrismaInstance } from "../utils/prisma.instance"
import { IUpdateUser } from "./user.type"

export async function fineOneByEmailService(email: string) {
  return await PrismaInstance().user.findUnique({
    where: {
      email: email,
    },
  })
}

export async function createOneUserService(email: string, password: string) {
  return await PrismaInstance().user.create({
    data: {
      email: email,
      password: createHashPassword(password),
    },
  })
}

export async function deleteOneUserService(id: string) {
  return await PrismaInstance().user.delete({
    where: {
      id: id,
    },
  })
}

export async function updateOneUserService(id: string, payload: IUpdateUser) {
  return await PrismaInstance().user.update({
    where: {
      id: id,
    },
    data: {
      age: payload.age,
      email: payload.email,
      gender: payload.gender,
      name: payload.name,
      status: payload.status,
    },
  })
}

export async function uploadImageService(id: string, imageName: string) {
  return await PrismaInstance().user.update({
    where: {
      id: id,
    },
    data: {
      image: imageName,
    },
  })
}
