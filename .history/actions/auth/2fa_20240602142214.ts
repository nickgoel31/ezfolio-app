"use server"

import { getEmailVerificationTokenByEmail } from "@/helpers/get-email-verification"
import { db } from "@/lib/db"
import { sendEmailVerificationEmailNodemailer } from "../send-email"
import { get2FATokenByEmail } from "@/helpers/get-2fa-token"

function generateOTP(limit) {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < limit; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

export const send2FAEmail = async (email:string) => {

    const existingToken = await get2FATokenByEmail(email)
    if(existingToken){
        //delete existing token
        delete2FATokenByToken(existingToken.id)  
    }
    //create new token
    const currentToken = await db.twoFactorAuthToken.create({
        data:{
            userEmail:email,
            pin:Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }
    })

    

    
    
    //send email
    await sendEmailVerificationEmailNodemailer(currentToken.userEmail, currentToken.id)
}


export const delete2FATokenByToken = async (token:string) => {
    await db.twoFactorAuthToken.delete({
        where:{
            id:token
        }
    })
    
}