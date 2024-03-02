"use server"

import { deleteEmailVerificationTokenByToken } from "@/actions/auth/email-verification"
import { EmailVerificationToken } from "@prisma/client"
import { getEmailVerificationTokenByToken } from "./get-email-verification"

export const checkEmailVerificationToken = async (inputToken:string) => {
    const token = await getEmailVerificationTokenByToken(inputToken)
    if(!token) return;
    if(token.expiresAt.getTime() < new Date().getTime()){
        return false
    }
    return true
}