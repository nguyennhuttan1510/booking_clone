import {prisma} from "@/lib/prisma";

export async function POST() {
  const user = await prisma.user.create({
    data: {
      email: 'elsa@prisma.io',
      name: 'Elsa Prisma',
    },
  })

  return Response.json({ user })
}