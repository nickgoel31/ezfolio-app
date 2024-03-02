"use server"

import { deleteEmailVerificationTokenByToken } from "@/actions/auth/email-verification"
import { EmailVerificationToken } from "@prisma/client"

export const checkEmailVerificationToken = (token:EmailVerificationToken) => {
    if(token.expiresAt < new Date()){
        deleteEmailVerificationTokenByToken(token.token)
        return false
    }
    return true
}