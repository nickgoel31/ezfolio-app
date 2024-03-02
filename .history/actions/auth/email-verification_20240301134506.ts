"use server"

import { getEmailVerificationTokenByEmail } from "@/helpers/get-email-verification"
import { db } from "@/lib/db"
import { sendEmailVerificationEmailNodemailer } from "../send-email"

export const sendEmailVerificationEmail = async (email:string) => {
    
    //send email
    // sendEmailVerificationEmailNodemailer(email, currentToken.token)
}


export const deleteEmailVerificationTokenByToken = async (token:string,userEmail:string) => {

    
}