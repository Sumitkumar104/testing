
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


// delete all the tables in request model.
export default async () => {
  await prisma.$transaction([
    prisma.request.deleteMany(),
  ])
}