"use server"

import { getEmailVerificationTokenByEmail } from "@/helpers/get-email-verification"
import { db } from "@/lib/db"
import { send2FAEmailNodemailer, sendEmailVerificationEmailNodemailer } from "../send-email"
import { get2FATokenByEmail } from "@/helpers/get-2fa-token"

export function generateOTP(limit:number) {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < limit; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return String(OTP);
}

export const twoFactorAuthenticationInDB = async (email:string) => {

    const existingToken = await get2FATokenByEmail(email)
    if(existingToken){
        //delete existing token
        delete2FATokenByToken(existingToken.id)  
    }
    //create new token
    const currentToken = await db.twoFactorAuthToken.create({
        data:{
            userEmail:email,
            pin:generateOTP(6),
            expiresAt: new Date(Date.now() + 1000 * 60 * 10),//10 minutes
        }
    })

    

    
    
    //send email
    await send2FAEmailNodemailer(currentToken.userEmail, currentToken.pin)
}

export const enableTwoFactorAuthenticationInDB = async (userId:string) => {

    const user = await db.user.update({
        where:{
            id:userId
        }
    })
    if(!user) return {error:"No user found!"};



    

    
    
    //send email
    await send2FAEmailNodemailer(currentToken.userEmail, currentToken.pin)
}


export const delete2FATokenByToken = async (token:string) => {
    await db.twoFactorAuthToken.delete({
        where:{
            id:token
        }
    })
    
}