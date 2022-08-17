import { PrismaInstance } from "../utils/prisma.instance"
import { ICreateComment } from "./comment.type"

export async function PostCommentService(payload: ICreateComment) {
  return await PrismaInstance().comment.create({
    data: {
      comment: payload.comment,
      postId: payload.postId,
    },
  })
}

export async function GetAllCommentInOnePostService(postId: string) {
  return await PrismaInstance().comment.findMany({
    where: {
      postId: postId,
    },
  })
}
