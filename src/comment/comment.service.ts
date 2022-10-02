import { PrismaInstance } from "../utils/prisma.instance"
import { CommonResponse } from "../utils/repsonse"
import { ICreateComment } from "./comment.type"

export async function PostCommentService(payload: ICreateComment) {
  const comment = await PrismaInstance().comment.create({
    data: {
      comment: payload.comment,
      postId: payload.postId,
    },
  })

  if (!comment) {
    return CommonResponse({
      code: 401,
      msg: "Failed",
      data: null,
    })
  }

  return CommonResponse({
    code: 200,
    msg: "Posted Successfully",
    data: comment,
  })
}

export async function GetAllCommentInOnePostService(postId: string) {
  const postInComment = await PrismaInstance().comment.findMany({
    where: {
      postId: postId,
    },
  })

  if (!postInComment) {
    return CommonResponse({
      code: 401,
      msg: "Failed",
      data: null,
    })
  }

  return CommonResponse({
    code: 200,
    msg: "Get Successfully",
    data: postInComment,
  })
}
