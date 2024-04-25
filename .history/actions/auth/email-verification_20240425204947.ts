"use server"

import { getEmailVerificationTokenByEmail } from "@/helpers/get-email-verification"
import { db } from "@/lib/db"
import { sendEmailVerificationEmailNodemailer } from "../send-email"

export const sendEmailVerificationEmail = async (email:string) => {

    const existingToken = await getEmailVerificationTokenByEmail(email)
    if(existingToken){
        //delete existing token
        deleteEmailVerificationTokenByToken(existingToken.token)  
    }
    //create new token
    const currentToken = await db.emailVerificationToken.create({
        data:{
            userEmail:email,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),//one day
        }
    })

    

    
    
    //send email
    sendEmailVerificationEmailNodemailer(currentToken.userEmail, currentToken.token)
}


export const deleteEmailVerificationTokenByToken = async (token:string) => {
    await db.emailVerificationToken.delete({
        where:{
            _id
        }
    })
    
}