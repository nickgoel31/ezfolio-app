"use server"

import { db } from "@/lib/db"

export const getEmailVerificationTokenByEmail = async (email:string) => {
    await db.emailVerificationToken.findFirst({
        where:{
            userEmail:email
        }
    })
}