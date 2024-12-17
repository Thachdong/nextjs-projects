import { PrismaClient } from "@prisma/client";

const getSingletonPrismaClient = () => new PrismaClient();

declare const globalThis: {
    prismaGlobal: ReturnType<typeof getSingletonPrismaClient>
} & typeof global

const prismaClient = globalThis.prismaGlobal ?? getSingletonPrismaClient()

export default prismaClient

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prismaClient
