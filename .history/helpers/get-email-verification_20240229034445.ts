"use server"

import { db } from "@/lib/db"

export const getEmailVerificationTokenByEmail = async (email:string) => {
    const token = await db.emailVerificationToken.findFirst({
        where:{
            userEmail:email
        }
    })

    return token;
}