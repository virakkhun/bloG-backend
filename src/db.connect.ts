import { PrismaInstance } from "./utils/prisma.instance"

export const DatabaseInitial = async () => {
  await PrismaInstance()
    .$connect()
    .then(async () => {
      await PrismaInstance().$disconnect()
    })
    .catch(async (e: any) => {
      if (e) {
        await PrismaInstance().$disconnect()
        process.exit(1)
      }
    })
}
