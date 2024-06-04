"use server"

import { db } from "@/lib/db"

export const get2FATokenByEmail = async (email:string) => {
    const token = await db.emailVerificationToken.findFirst({
        where:{
            userEmail:email
        }
    })

    return token;
}

export const getEmailVerificationTokenByToken = async (token:string) => {
    const vertoken = await db.emailVerificationToken.findUnique({
        where:{
            token
        }
    })

    return vertoken;
}