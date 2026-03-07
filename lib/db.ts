import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const databaseUrl = process.env.DATABASE_URL?.trim();

export const hasDatabase =
  Boolean(databaseUrl) && !databaseUrl?.toLowerCase().includes("placeholder");

export const db =
  !hasDatabase
    ? null
    : globalForPrisma.prisma ??
      new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
      });

if (process.env.NODE_ENV !== "production" && db) globalForPrisma.prisma = db;
