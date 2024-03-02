"use server"

import { db } from "@/lib/db"

export const getPasswordResetTokenByToken = async (token:string) => {
    const pst = await db.passwordResetToken.findUnique({
        where:{
            token
        }
    })

    if(!pst) return {error: "No Token found"}

    return pst
}

export const getPasswordResetTokenByUserEmail = async (email:string) => {
    const pst = await db.passwordResetToken.findUnique({
        where:{
            userEmail:email
        }
    })

    return pst
}