"use client"

import { deletePasswordResetTokenByToken } from "@/actions/auth/password-reset"
import { getPasswordResetTokenByToken } from "@/helpers/get-password-reset-token"
import { PasswordResetToken } from "@prisma/client"
import { useEffect, useState } from "react"

export const usePasswordResetToken = (tokenId:string) => {
    const [token,setToken] = useState<PasswordResetToken>()
    const [error,setError] = useState<string>()

    useEffect(() => {
        async function getTokenByToken(){
            let {resetToken, error} = await getPasswordResetTokenByToken(tokenId)
            if(resetToken) {
                setToken(resetToken)
            }
            else if (error){
                setError(error)
            }

        }

        getTokenByToken()
    },[])

    return token || error;
}

export const useDeletePasswordResetToken = (token:string) => {
        async function deleteToken() {
            await deletePasswordResetTokenByToken(token)
            return "DELETED TOKEN"
        }

        deleteToken()
}