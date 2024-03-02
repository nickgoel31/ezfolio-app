"use server"

import { getEmailVerificationTokenByEmail } from "@/helpers/get-email-verification"
import { db } from "@/lib/db"

export const sendEmailVerificationEmail = async (email:string) => {
    const existingToken = await getEmailVerificationTokenByEmail(email)

    if(existingToken) {
        await db.emailVerificationToken.delete({
            where:{
                userEmail: existingToken.userEmail,
            }
        })
    }
}