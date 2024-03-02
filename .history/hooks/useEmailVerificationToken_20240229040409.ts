"use client"

import { deleteEmailVerificationTokenByToken } from "@/actions/auth/email-verification"
import { getEmailVerificationTokenByEmail, getEmailVerificationTokenByToken } from "@/helpers/get-email-verification"
import { EmailVerificationToken } from "@prisma/client"
import { useEffect, useState } from "react"

export const useEmailVerificationToken = (tokenId:string) => {
    const [token,setToken] = useState<EmailVerificationToken>()

    useEffect(() => {
        async function getTokenByToken(){
            let verToken = await getEmailVerificationTokenByToken(tokenId)
            if(!verToken) return;

            setToken(verToken)
        }

        getTokenByToken()
    },[])

    return token;
}

export const useDeleteEmailVerificationToken = (token:string) => {
    useEffect(() => {
        async function deleteToken() {
            await deleteEmailVerificationTokenByToken(token)
            return "DELETED TOKEN"
        }
    },[])
}