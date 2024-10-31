import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

// db.snippet.create({
//     data: {
//         title: 'Sum',
//         code: 'const sumFunc = (a,b) => return a + b',
//     }
// })