"use client"

import { deletePasswordResetTokenByToken } from "@/actions/auth/password-reset"
import { getPasswordResetTokenByToken } from "@/helpers/get-password-reset-token"
import { PasswordResetToken } from "@prisma/client"
import { useEffect, useState } from "react"

export const usePasswordResetToken = (tokenId:string) => {
    const [token,setToken] = useState<PasswordResetToken>()

    useEffect(() => {
        async function getTokenByToken(){
            let resetToken = await getPasswordResetTokenByToken(tokenId)
            if(!resetToken) return;

            setToken(resetToken)
        }

        getTokenByToken()
    },[])

    return token;
}

export const useDeletePasswordResetToken = (token:string) => {
    useEffect(() => {
        async function deleteToken() {
            await deletePasswordResetTokenByToken(token)
            return "DELETED TOKEN"
        }
        deleteToken()
    },[])
}