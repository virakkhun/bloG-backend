import { FastifyInstance } from "fastify"
import multer from "fastify-multer"
import {
  CreateOnePost,
  DeleteOnePost,
  GetAllPostWithComment,
  GetPostDetail,
  UpdateOnePost,
} from "./post.controller"

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${file.originalname}`)
  },
})

const upload = multer({
  storage: storage,
})

export default async function postRoutes(fastify: FastifyInstance) {
  fastify.register(multer.contentParser)

  //** Get all post */
  fastify.get(
    "/all",
    { preHandler: [fastify.authenticate] },
    GetAllPostWithComment
  )

  //** Create one post */
  fastify.post(
    "/create",
    {
      preHandler: [fastify.authenticate, upload.single("image")],
    },
    CreateOnePost
  )

  //** Delete one post by ID */
  fastify.post(
    "/delete",
    {
      preHandler: [fastify.authenticate],
    },
    DeleteOnePost
  )

  //** Update one post by ID */
  fastify.post(
    "/update",
    {
      preHandler: [fastify.authenticate],
    },
    UpdateOnePost
  )

  fastify.get(
    "/detail",
    {
      preHandler: [fastify.authenticate],
    },
    GetPostDetail
  )
}
