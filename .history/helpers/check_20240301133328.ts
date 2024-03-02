"use server"

import { deleteEmailVerificationTokenByToken } from "@/actions/auth/email-verification"
import { EmailVerificationToken } from "@prisma/client"

export const checkEmailVerificationToken = (token:EmailVerificationToken) => {
    if(token.expiresAt.getTime() < new Date().getTime()) {
        //delete token
        deleteEmailVerificationTokenByToken(token.token)
        return true;
    }

    return false;
}