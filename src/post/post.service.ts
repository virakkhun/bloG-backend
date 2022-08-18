import { PrismaInstance } from "../utils/prisma.instance"
import { ICreatePost, IUpdatePost } from "./post.types"

export async function getAllPostWithComementService() {
  return await PrismaInstance().post.findMany()
}

export async function createOnePostService(payload: ICreatePost) {
  return await PrismaInstance().post.create({
    data: {
      body: payload.body,
      slug: payload.slug,
      title: payload.title,
      authorId: payload.authorId,
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
    include: {
      comment: true,
    },
  })
}
