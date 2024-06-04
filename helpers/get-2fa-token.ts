"use server"

import { db } from "@/lib/db"

export const get2FATokenByEmail = async (email:string) => {
    const token = await db.twoFactorAuthToken.findFirst({
        where:{
            userEmail:email
        }
    })

    return token;
}

export const get2FATokenByToken = async (token:string) => {
    const vertoken = await db.twoFactorAuthToken.findUnique({
        where:{
            id:token,
        }
    })

    return vertoken;
}