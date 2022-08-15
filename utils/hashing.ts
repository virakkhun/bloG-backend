import bcrypt from "bcrypt"

export const generateSalt = () => {
  return bcrypt.genSaltSync(10)
}

export const createHashPassword = (password: string) => {
  return bcrypt.hashSync(password, generateSalt())
}

export const compareHash = (password: string, hashPassword: string) => {
  return bcrypt.compareSync(password, hashPassword)
}
