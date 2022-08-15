import jwt from "jsonwebtoken"
const SECRET_KEY = process.env.SECRET_KEY

export const generateToken = async <Type>(
  payload: Type extends {} ? Type : string
): Promise<string> => {
  return jwt.sign(payload, SECRET_KEY!, {
    expiresIn: 60 * 60 * 24 * 7,
  })
}

export const verifyToken = async (token: string) => {
  return jwt.verify(token, SECRET_KEY!)
}
