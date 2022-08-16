import { server } from ".."
import { ILoginUser } from "../user/user.type"
import { compareHash } from "../utils/hashing"
import { PrismaInstance } from "../utils/prisma.instance"

export async function loginService(payload: ILoginUser) {
  const { email, password } = payload

  const user = await PrismaInstance().user.findUnique({
    where: {
      email: email,
    },
  })

  if (user !== null) {
    const isMatchPassword = compareHash(password ?? "", user.password)

    if (isMatchPassword) {
      const { password, ...rest } = user
      const signToken = server.jwt.sign(rest, {
        expiresIn: 60 * 60 * 24 * 7,
      })

      return signToken
    }
  }

  return ""
}
