"use server"

import { db } from "@/lib/db"

export const getSessionByUserId = async (userId:string) => {
    const session = await db.userSession.findUnique({
        where:{
            userId
        }
    })

    return session;
}

export const getSessionBySessionId = async (sessionId:string) => {
    const session = await db.userSession.findUnique({
        where:{
            sessionId
        }
    })

    return session;
}