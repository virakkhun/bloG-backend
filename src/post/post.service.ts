import { PrismaInstance } from "../utils/prisma.instance"
import { ICreatePost, IUpdatePost } from "./post.types"

export async function getAllPostWithCommentService() {
  return await PrismaInstance().post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })
}

export async function createOnePostService(payload: ICreatePost) {
  return await PrismaInstance().post.create({
    data: {
      body: payload.body,
      slug: payload.slug,
      title: payload.title,
      authorId: payload.authorId,
      createdAt: new Date().toISOString(),
      images: payload.images,
    },
  })
}

export async function deletePostService(id: string) {
  return await PrismaInstance().post.delete({
    where: {
      id: id,
    },
  })
}

export async function updatePostService(id: string, payload: IUpdatePost) {
  return await PrismaInstance().post.update({
    where: {
      id: id,
    },
    data: {
      title: payload.title,
      body: payload.body,
      slug: payload.slug,
    },
  })
}

export async function getPostWithCommentService(id: string) {
  return await PrismaInstance().post.findUnique({
    where: {
      id: id,
    },
  })
}
