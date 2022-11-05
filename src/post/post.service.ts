import { Post, User } from "@prisma/client"
import { PrismaInstance } from "../utils/prisma.instance"
import { CommonResponse } from "../utils/repsonse"
import { ICreatePost, IUpdatePost } from "./post.types"

export async function getAllPostService() {
  const allPosts = await PrismaInstance().post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  if (allPosts.length === 0) {
    return CommonResponse({
      code: 401,
      data: null,
      msg: "Failed",
    })
  }

  let data: Partial<Post & User>[] = []

  allPosts.forEach((post) => {
    const { id, body, slug, title, authorId, images } = post
    const { name, status, authorImage } = post.author
    data.push({
      id,
      body,
      slug,
      title,
      authorId,
      name,
      status,
      images,
      authorImage,
    })
  })

  return CommonResponse({
    code: 200,
    msg: "Get Successfully",
    data: data,
  })
}

export async function createOnePostService(payload: ICreatePost) {
  const post = await PrismaInstance().post.create({
    data: {
      body: payload.body,
      slug: payload.slug,
      title: payload.title,
      authorId: payload.authorId,
      createdAt: new Date().toISOString(),
      images: payload.images,
    },
  })

  if (!post) {
    return CommonResponse({
      code: 401,
      msg: "Failed",
      data: null,
    })
  }

  return CommonResponse({
    code: 200,
    msg: "Created Successfully",
    data: post,
  })
}

export async function deletePostService(id: string) {
  const deletePost = await PrismaInstance().post.delete({
    where: {
      id: id,
    },
  })

  if (!deletePost) {
    return CommonResponse({
      code: 401,
      msg: "Failed",
      data: null,
    })
  }

  return CommonResponse({
    code: 200,
    msg: "Deleted Successfully",
    data: deletePost,
  })
}

export async function updatePostService(id: string, payload: IUpdatePost) {
  const update = await PrismaInstance().post.update({
    where: {
      id: id,
    },
    data: {
      title: payload.title,
      body: payload.body,
      slug: payload.slug,
    },
  })

  if (!update) {
    return CommonResponse({
      code: 401,
      msg: "Failed",
      data: null,
    })
  }

  return CommonResponse({
    code: 200,
    msg: "Updated Successfully",
    data: update,
  })
}

export async function getPostService(id: string) {
  const getPost = await PrismaInstance().post.findUnique({
    where: {
      id: id,
    },
    include: {
      author: true,
      comment: true,
    },
  })

  if (!getPost) {
    return CommonResponse({
      code: 401,
      msg: "Failed",
      data: null,
    })
  }

  return CommonResponse({
    code: 200,
    msg: "Get Successfully",
    data: {
      detail: getPost,
    },
  })
}
