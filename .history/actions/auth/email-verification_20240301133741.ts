"use server"

import { getEmailVerificationTokenByEmail } from "@/helpers/get-email-verification"
import { db } from "@/lib/db"
import { sendEmailVerificationEmailNodemailer } from "../send-email"

export const sendEmailVerificationEmail = async (email:string) => {
    const existingToken = await getEmailVerificationTokenByEmail(email)

    if(existingToken) {
        await db.emailVerificationToken.delete({
            where:{
                userEmail: existingToken.userEmail,
            }
        })
    }

    const currentTime = new Date().getTime()
    const expiresAt = new Date(currentTime + (1000 * 60 * 15)) // 15 minutes

    await db.emailVerificationToken.create({
        data:{
            userEmail: email,
            expiresAt
        }
    })

    const currentToken = await getEmailVerificationTokenByEmail(email)
    if(!currentToken) return;

    //send email
    sendEmailVerificationEmailNodemailer(email, currentToken.token)
}


export const deleteEmailVerificationTokenByToken = async (token:string,userEmail:string) => {

    await db.emailVerificationToken.delete({
        where:{
            token,
            userEmail
        }
    })
}