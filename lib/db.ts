import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

/* 
We are not using the below syntax because we are still in the 
development/building stage of the project and our constant saving and reload of code/project 
will keep creating new instance of the PrismaClient which can build up continuously making the project to crash.
However, using the globalThis keyword is important because it is not affected by hot-reload.

export const db = new PrismaClient();

*/
