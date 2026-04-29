import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient} from "../generated/prisma/client";

// const adapter = new PrismaMariaDb({
//     host: process.env.DB_HOST_URL,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_SCHEMA_NAME,
//     connectionLimit: 10
// })

const adapter = new PrismaMariaDb({
    host: "localhost",
    user: "root",
    password: "davidroot",
    database: "web32f",
    connectionLimit: 10
})

export const prisma = new PrismaClient({adapter});


