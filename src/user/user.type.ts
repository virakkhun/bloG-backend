import { ICreatePost } from "../post/post.types"

export interface User {
  id: string
  email: string
  name: string
  age: number
  gender: string
  password: string
  image: string
  posts: ICreatePost[]
  status: boolean
}

export interface ICreateUser {
  email: string
  password: string
}

export type ILoginUser = Partial<ICreateUser>

export type IUpdateUser = Partial<User>
