import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString,
});
console.log("Using database connection string:", connectionString);
const adapter = new PrismaPg(pool);
export const prismaClient = new PrismaClient({ adapter });