import { PrismaInstance } from "../utils/prisma.instance"
import { ICreatePost } from "./post.types"

export async function getAllPostWithComement() {
  return await PrismaInstance().post.findMany({
    include: {
      comment: true,
    },
  })
}

export async function createOnePost(payload: ICreatePost) {
  return await PrismaInstance().post.create({
    data: {
      body: payload.body,
      slug: payload.slug,
      title: payload.title,
      authorId: payload.authorId,
    },
  })
}
