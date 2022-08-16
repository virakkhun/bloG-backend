export interface ICreateUser {
  email: string
  password: string
  image: string
  name: string
}

export type ILoginUser = Partial<ICreateUser>
