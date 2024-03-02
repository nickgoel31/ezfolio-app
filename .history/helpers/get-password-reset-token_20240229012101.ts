"use server"

import { db } from "@/lib/db"

export const getPasswordResetTokenByToken = (token:string) => {

}

export const getPasswordResetTokenByUserEmail = async (email:string) => {
    const pst = await db.passwordResetToken.findUnique({
        where:{
            userEmail:email
        }
    })

    return pst
}