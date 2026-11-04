import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient() {
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

// Next.js / Turbopack HMR에서도 클라이언트를 하나만 유지해 pool 고갈을 막습니다.
globalForPrisma.prisma = prisma;

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL?.trim());
}
