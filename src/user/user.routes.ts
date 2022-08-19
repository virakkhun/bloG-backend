import { FastifyInstance } from "fastify"
import {
  createUser,
  deleteUser,
  getUser,
  updateOneUser,
  UploadImage,
} from "./user.controller"
import multer from "fastify-multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./")
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${file.originalname}`)
  },
})

const upload = multer({
  storage: storage,
})

export default async function users(fastify: FastifyInstance) {
  fastify.register(multer.contentParser)
  fastify.post(
    "/info",
    {
      preHandler: [fastify.authenticate],
    },
    getUser
  )

  fastify.post("/create", createUser)

  fastify.post(
    "/delete",
    {
      preHandler: [fastify.authenticate],
    },
    deleteUser
  )

  fastify.post(
    "/update",
    {
      preHandler: [fastify.authenticate],
    },
    updateOneUser
  )

  fastify.post(
    "/upload",
    {
      preHandler: [fastify.authenticate, upload.single("image")],
    },
    UploadImage
  )
}
