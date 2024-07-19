import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({
    datasources:{
        db:{
            url: process.env.DATABASE_URL,
        },
    },
});

//链接数据库

export {prisma}