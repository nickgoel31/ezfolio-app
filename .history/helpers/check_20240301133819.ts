"use server"

import { deleteEmailVerificationTokenByToken } from "@/actions/auth/email-verification"
import { EmailVerificationToken } from "@prisma/client"

export const checkEmailVerificationToken = (token:EmailVerificationToken) => {
    const currentDate = new Date();
    if(token.expiresAt.getTime() > currentDate.getTime()) {
        //delete token
        deleteEmailVerificationTokenByToken(token.token,token.userEmail)
        return true;
    }

    deleteEmailVerificationTokenByToken(token.token,token.userEmail)
    return false;
}