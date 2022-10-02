import { createHashPassword } from "../utils/hashing"
import { PrismaInstance } from "../utils/prisma.instance"
import { IUpdateUser } from "./user.type"
import { CommonResponse } from "../utils/repsonse"

export async function fineOneByEmailService(email: string) {
  const user = await PrismaInstance().user.findUnique({
    where: {
      email: email,
    },
  })

  if (!user) {
    return CommonResponse({
      code: 401,
      msg: "Failed",
      data: null,
    })
  }

  return CommonResponse({
    code: 200,
    msg: "Get Successfully",
    data: user,
  })
}

export async function findOneUserByIdService(id: string) {
  const findById = await PrismaInstance().user.findUnique({
    where: {
      id: id,
    },
  })

  if (!findById) {
    return CommonResponse({
      code: 401,
      msg: "Failed",
      data: null,
    })
  }

  return CommonResponse({
    code: 200,
    msg: "Get Successfully",
    data: findById,
  })
}

export async function createOneUserService(email: string, password: string) {
  const { statusCode } = await fineOneByEmailService(email)

  if (statusCode === 401) {
    const createNewUser = await PrismaInstance().user.create({
      data: {
        email: email,
        password: createHashPassword(password),
      },
    })

    if (!createNewUser) {
      return CommonResponse({
        code: 401,
        msg: "Failed",
        data: null,
      })
    }

    return CommonResponse<typeof createNewUser>({
      code: 200,
      msg: "Created Successfully",
      data: createNewUser,
    })
  }

  return CommonResponse({
    code: 401,
    msg: "Failed",
    data: null,
  })
}

export async function deleteOneUserService(id: string) {
  const deleteUser = await PrismaInstance().user.delete({
    where: {
      id: id,
    },
  })

  if (!deleteUser) {
    return CommonResponse({
      code: 401,
      msg: "Failed",
      data: null,
    })
  }

  return CommonResponse({
    code: 200,
    msg: "Deleted Successfully",
    data: deleteUser,
  })
}

export async function updateOneUserService(id: string, payload: IUpdateUser) {
  const updateUser = await PrismaInstance().user.update({
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

  if (!updateUser) {
    return CommonResponse({
      code: 401,
      msg: "Failed",
      data: null,
    })
  }

  return CommonResponse({
    code: 200,
    msg: "Updated Successfully",
    data: updateUser,
  })
}

export async function uploadImageService(id: string, imageName: string) {
  const upload = await PrismaInstance().user.update({
    where: {
      id: id,
    },
    data: {
      authorImage: imageName,
    },
  })

  if (!upload) {
    return CommonResponse({
      code: 401,
      msg: "Failed",
      data: null,
    })
  }

  return CommonResponse({
    code: 200,
    msg: "Posted Successfully",
    data: upload,
  })
}
