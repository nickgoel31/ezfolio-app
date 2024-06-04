"use server"

import { getEmailVerificationTokenByEmail } from "@/helpers/get-email-verification"
import { db } from "@/lib/db"
import { sendEmailVerificationEmailNodemailer } from "../send-email"

export const send2FAEmail = async (email:string) => {

    const existingToken = await get2TokenByEmail(email)
    if(existingToken){
        //delete existing token
        delete2FATokenByToken(existingToken.token)  
    }
    //create new token
    const currentToken = await db.emailVerificationToken.create({
        data:{
            userEmail:email,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),//one day
        }
    })

    

    
    
    //send email
    await sendEmailVerificationEmailNodemailer(currentToken.userEmail, currentToken.token)
}


export const delete2FATokenByToken = async (token:string) => {
    await db.twoFactorAuthToken.delete({
        where:{
            id:token
        }
    })
    
}